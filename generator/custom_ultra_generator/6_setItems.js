var path = require('path');
var tress = require('tress');
var needle = require('needle');
var cheerio = require('cheerio');
var resolve = require('url').resolve;
var fs = require('fs');
request = require('request');

let mbsq = `
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// Теперь несколько секунд ждем пока jQuery подгрузится, и запускаем.
jQuery.noConflict();
`



var startingUrl = "https://www.diablo-2.net/sets/";

var results = [];
var URL = [{
		tag: 'normal_sets',
		urls: [
			'http://classic.battle.net/diablo2exp/items/sets/sets1.shtml',
			'http://classic.battle.net/diablo2exp/items/sets/sets2.shtml',
			'http://classic.battle.net/diablo2exp/items/sets/sets3.shtml'
		]
	},
	{
		tag: 'lod_sets',
		urls: [
			'http://classic.battle.net/diablo2exp/items/sets/sets4.shtml',
			'http://classic.battle.net/diablo2exp/items/sets/sets5.shtml',
			'http://classic.battle.net/diablo2exp/items/sets/sets6.shtml',
			'http://classic.battle.net/diablo2exp/items/sets/sets7.shtml'
		]
	}
]

class GreenItem {
	constructor(id = 0, name = '', description = '', img = '', partial = '', tags = []) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.img = img;
		this.partial = partial;
		this.tags = tags;
	}
}
var q = tress(function (url, callback) {
	needle.get(url.url, (err, res) => {

		if (err) throw err;
		// парсим DOM
		var $ = cheerio.load(res.body, {
			decodeEntities: false
		});
		var tables;
		if ($('body>table').length == 1) { //Aldur's Watchtower page 4
			const root = $('body>table').eq(0);
			var p = $(root).children('tbody').children('tr').children('td').eq(1).children('table').eq(4).children('tbody').children('tr').children('td').eq(1).children().eq(1).children('tbody').children('tr').children('td').children('font').children('span').children('p');
			let checkAnchor = p.children('a');
			if (checkAnchor) {
				let iterableTable = p.children('table').toArray().filter((i, w) => {
					return (i.innerText !== '');
				})
				for (let i = 0; i < iterableTable.length; i = i + 2) {
					let titleRowInIterableTable = iterableTable[i];
					let RowInIterableTable = iterableTable[i + 2];
					let SetNameTitleRow = $(titleRowInIterableTable).find('img').eq(1).attr('alt');
					if (SetNameTitleRow == undefined) {
						//console.error('\x1b[33m' + 'Приехали!' + '\x1b[0m');
						SetNameTitleRow = $(iterableTable[i + 1]).find('img').eq(1).attr('alt');
						if (SetNameTitleRow == undefined) {
							//console.error('\x1b[41m' + 'Все очень плохо' + '\x1b[0m');
							//console.log(url.url)
						}
					}
					let currentRow = $(RowInIterableTable).children('tbody').children('tr');
					let RSetRow = '';
					currentRow.each((index, item) => {
						var $item = $(item);
						var itemChilds = $item.children('td');

						if (itemChilds.length == 3) {
							RSetRow = itemChilds.eq(2).html() // Бонусы сета
						}

						let LSetRow = itemChilds.eq(0);
						let img = LSetRow.find('center>img').attr('src');
						let name = LSetRow.find('center>font>span').html();

						let MSetRow = itemChilds.eq(1);
						let description = MSetRow.html();

						if (name && description) {
							let item = new GreenItem(results.length + 1, name, description, img, RSetRow, ['sets', url.tag, SetNameTitleRow]);
							results.push(item)
						}

					})
				}
			}

		} else {
			const root = $('body>table').eq(1);
			var tables = $(root).children('tbody').children('tr').children('td').eq(1).children('table').eq(4).children('tbody').children('tr').children('td').eq(1).children('*').toArray().splice(3);
			if (tables.length) {
				for (var i = 0; i < tables.length; i = i + 5) { // вот он каждый айтем сет
					let SetNameTitleRow = $(tables[i]).find('td').eq(1).find('img').attr('alt');
					let RSetRow = '';
					let SetRow = $(tables[i + 2]).find('table>tbody>tr');
					//let ItemSetDescr = $(tables[i+2]).find('table>tbody>tr>td>p')
					for (var j = 0; j < SetRow.length; j++) {
						let rows = $(SetRow[j]).children('td');
						let LSetRow = rows.eq(0);
						let img = LSetRow.find('center>img').attr('src');
						let name = LSetRow.find('center>font>span').html();

						let MSetRow = rows.eq(1);
						let description = MSetRow.html();
						if (rows.length === 3) {
							let RrSetRowCell = rows.eq(2).html();
							if (RrSetRowCell) {
								RSetRow = RrSetRowCell

							}
						}
						if (SetNameTitleRow == undefined) console.error('Приехали!')
						if (name && description) {
							let item = new GreenItem(results.length + 1, name, description, img, RSetRow, ['sets', url.tag, SetNameTitleRow]);
							results.push(item)
						}
					}

				}
			} else { //grisvold
				tables = $('body>*:nth-child(4)>tbody>tr>td:nth-child(2)>table:nth-child(5)>tbody>tr>td:nth-child(2)>table>tbody>tr>td>font>span>p').toArray();
				for (let tb of tables) {
					let qtb = $(tb)
					if (qtb.children('a').length && qtb.children('a').is('[name]')) { // Если есть anchor то это нужный тэг
						let titleTable = qtb.children('table').eq(0).find('img').eq(1).attr('alt');
						titleTable = titleTable
						let iterableTable = qtb.children('table').toArray().filter((i, w) => {
							return (i.innerText !== '');
						})

						for (let i = 0; i < iterableTable.length; i = i + 2) {

							let titleRowInIterableTable = iterableTable[i];
							let RowInIterableTable = iterableTable[i + 1];
							let SetNameTitleRow = $(titleRowInIterableTable).find('img').eq(1).attr('alt');
							if (SetNameTitleRow == undefined) {
								//console.error('\x1b[33m' + 'Приехали!' + '\x1b[0m');
								SetNameTitleRow = $(iterableTable[i + 1]).find('img').eq(1).attr('alt');
								if (SetNameTitleRow == undefined) {
									//console.error('\x1b[41m' + 'Все очень плохо' + '\x1b[0m');
									//console.log(url.url)
								}
							}

							let currentRow = $(RowInIterableTable).children('tbody').children('tr');
							let RSetRow = '';
							currentRow.each((index, item) => {
								var $item = $(item);

								var itemChilds = $item.children('td');

								if (itemChilds.length == 3) {
									RSetRow = itemChilds.eq(2).html() // Бонусы сета
								}


								let LSetRow = itemChilds.eq(0);
								let img = LSetRow.find('center>img').attr('src');
								let name = LSetRow.find('center>font>span').html();

								let MSetRow = itemChilds.eq(1);
								let description = MSetRow.html();

								if (name && description) {
									let item = new GreenItem(results.length + 1, name, description, img, RSetRow, ['sets', url.tag, SetNameTitleRow]);
									results.push(item)
								}

							})
						}
					}
				}
			}


		}
		callback();
	});
}, 10);

for (murl of URL) {
	let linkUrl = murl.urls
	for (var i = 0; i < linkUrl.length; i++) {
		let surl = linkUrl[i]
		let topush = {
			tag: murl.tag,
			url: surl
		};
		q.push(topush);
	}


}

function ensureDirectoryExistence(filePath) {
	var dirname = path.dirname(filePath);
	if (fs.existsSync(dirname)) {
		return true;
	}
	ensureDirectoryExistence(dirname);
	fs.mkdirSync(dirname,  {recursive: true});
}

var download = function (uri, infilename, callback) {
	var myfolder = './diablofresher/public/';
	let filename = infilename;
	filename = filename.replace('/images/battle/diablo2exp/images/items', 'img/items/sets');
	filename = filename.replace('/diablo2exp/images/items', 'img/items/sets');
	
	ensureDirectoryExistence( myfolder + filename);
	request.head(uri, function (err, res, body) {
		request(uri).pipe(fs.createWriteStream(myfolder+ filename, {flags: 'w'})).on('close', callback);
	});
};

q.drain = function () {
	for (let res of results) {
		//скачивание картинок
		// download('http://classic.battle.net' + res.img, res.img, () => {
		// 	console.log('done ' + res.name);
		// });
		res.img = res.img.replace('/images/battle/diablo2exp/images/items', 'img/items/sets');
		res.img = res.img.replace('/diablo2exp/images/items', 'img/items/sets');

	}
	fs.writeFileSync('./json/qs.json', JSON.stringify(results, null, 4));
}