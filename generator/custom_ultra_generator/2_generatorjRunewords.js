var tress = require('tress');
var needle = require('needle');
var cheerio = require('cheerio');
var resolve = require('url').resolve;
var fs = require('fs');
request = require('request');

var URL = ["https://diablo2.diablowiki.net/Runewords"];


var results = [];


var q = tress(function(url, callback){
	needle.get(url, function(err, res){

        if (err) throw err;
        // парсим DOM
        var $ = cheerio.load(res.body, { decodeEntities: false });
        var table = $('table').eq(2);

        var itemsrow = $(table).find('tr').toArray().slice(2);
        console.log(itemsrow);
        for (var i = 0; i < itemsrow.length; i++) {

	        r = $(itemsrow[i]).find('td');

	        var Runewords = r.eq(0).html();
	        var Stats = r.eq(1).html();
	        var Comments = r.eq(2).html();

	        var tags = ['runeword'];

			results.push({
				name: Runewords,
				description: Stats,
				Comments: Comments,
				tags: tags
			});
		}
		callback();
	});
}, 10);


q.drain = function(){
    fs.writeFileSync('./json/qr.json', results);
}

for (murl of URL) {
	q.push(murl);	
}
