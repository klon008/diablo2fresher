var tress = require('tress');
var needle = require('needle');
var cheerio = require('cheerio');
var resolve = require('url').resolve;
var fs = require('fs');
const HtmlTableToJson = require('html-table-to-json');
const cliSpinners = require('cli-spinners');
const ora = require('ora');
const chalk = require('chalk');
const Spinners = require('spinnies');


var URL = [
	"http://classic.battle.net/diablo2exp/items/normal/orbs.shtml",
	"http://classic.battle.net/diablo2exp/items/exceptional/orbs.shtml",
	"http://classic.battle.net/diablo2exp/items/elite/orbs.shtml"
];


const spinners = new Spinners({
	spinner: cliSpinners.dots,
	color: 'blue',
	succeedColor: 'green',
	failColor: 'red',
	spinnerColor: 'blueBright'
  });

var results = [];

const clone = (obj) => Object.assign({}, obj);

const renameKey = (object, key, newKey) => {

	const clonedObj = clone(object);

	const targetKey = clonedObj[key];



	delete clonedObj[key];

	clonedObj[newKey] = targetKey;

	return clonedObj;

};
var newNeedle = function (url, callback) {
	needle.get(url, function (err, res) {

		if (err) {
			var oldTitle = spinners.pick(url).text;
			var template = 'Loading Page: ' + chalk.bold.rgb(10, 100, 200)(murl)
			var tmpOldTitle = oldTitle.replace(template, "");
			tmpOldTitle = tmpOldTitle.replace('x', "");
			if (!tmpOldTitle){
				tmpOldTitle = '0';
			}else {
				tmpOldTitle = tmpOldTitle.trim();
			}
			var reg = /^\d+$/;
			var numberRepeat = parseInt(tmpOldTitle.match( reg ));
			if (isNaN(numberRepeat)){
				numberRepeat = 0;
			}
			spinners.update(url, { text: `${numberRepeat+1} x ${template}`, color: 'white' });
			//console.log(url + ' не отвечает. Попробуем еще раз')
			newNeedle(url, callback);
			return;
		};
		// парсим DOM
		var $ = cheerio.load(res.body, { decodeEntities: false });
		var items = $('table')[8];
		var pageName = $($(items).find('center>b')).html();
		tmpPageType = pageName.split('Normal');
		var difficult = '';
		var tag = '';
		if (tmpPageType.length == 2) {
			difficult = 'Normal';
			tag = tmpPageType[1].trim();
		}
		tmpPageType = pageName.split('Exceptional');
		if (tmpPageType.length == 2) {
			difficult = 'Exceptional';
			tag = tmpPageType[1].trim();
		}
		tmpPageType = pageName.split('Elite');
		if (tmpPageType.length == 2) {
			difficult = 'Elite';
			tag = tmpPageType[1].trim();
		}

		var itemsrow = $(items).find('tr tr')
		//$($('table')[8]).find('tr>td font>center>table')
		var forParsing = $($('table')[8]).find('tr>td>font>span>center>table')
		if (forParsing.length == 0) {

			forParsing = $($('table')[8]).find('tr>td font>center>table')
		}
		table = forParsing;
		//		$($('table')[8]).find('tr>td>font>span>center>table')
		rows = $(table).children('tbody').children('tr');
		fields = [];
		rowZero = $(rows[0]).children('th');
		for (var j = 0; j < rowZero.children().length; j++) {
			field = $(rowZero[j]).text().trim();
			if (field == '') {
				field = 'Name';
			}
			fields.push(field);
		}
		for (var i = 1; i < rows.length; i++) {
			var row = $(rows[i]).children('td');
			var tmpObject = {};
			for (var j = 0; j < row.length; j++) {
				var rowValue = $(row[j]).text().trim();
				tmpObject[fields[j]] = rowValue;

			}
			var img = $($(rows[i]).find('img')).attr('src');
			tmpObject['Image'] = img;
			tmpObject['GroupTag'] = pageName;
			tmpObject['tag'] = tag;
			tmpObject['difficult'] = difficult;
			results.push(tmpObject);
		}
		//console.log(`PAGE ${url} FINISHED`);
		spinners.succeed(url);
		callback();
	});
}
var q = tress(function (url, callback) {
	newNeedle(url, callback)
}, 2);


q.drain = function () {
	fs.writeFileSync('./json/SorceressOrbs.json', JSON.stringify(results, null, 4));
}

for (murl of URL) {
	// spinners[murl] = ora({
	// 	text:'Loading Page: ' + chalk.bold.rgb(10, 100, 200)(murl),
	// 	spinner: cliSpinners.dots,
	// }).start();
	spinners.add(murl, { text: 'Loading Page: ' + chalk.bold.rgb(10, 100, 200)(murl), color: 'white' });
	q.push(murl);
}
