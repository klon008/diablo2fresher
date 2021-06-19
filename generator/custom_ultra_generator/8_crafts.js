var tress = require('tress');
var needle = require('needle');
var cheerio = require('cheerio');
var resolve = require('url').resolve;
var fs = require('fs');
request = require('request');

var URL = [
    {
        name: 'Blood',
        url:"https://diablo-archive.fandom.com/wiki/Blood_Items_(Diablo_II)"
    },
    {
        name: 'Caster',
        url:"https://diablo-archive.fandom.com/wiki/Caster_Items_(Diablo_II)"
    },
    {
        name: 'Hit Power',
        url:"https://diablo-archive.fandom.com/wiki/Hit_Power_Items_(Diablo_II)"
    },
    {
        name: 'Safety',
        url:"https://diablo-archive.fandom.com/wiki/Safety_Items_(Diablo_II)"
    }
];


var results = [];


var q = tress(function(url, callback){
	needle.get(url.url, (err, res)=>{

        if (err) throw err;
        // парсим DOM
        var $ = cheerio.load(res.body, { decodeEntities: false });
        var table = $('.mw-parser-output');

        var itemsrow = $(table).children('div').toArray();
        console.log(itemsrow.length);
        for (var i = 0; i < itemsrow.length; i++) {
            var table = $(itemsrow[i]).find('table');
            var header = table.find('td').eq(0).find('span').eq(0).text();
            var image = table.find('td').eq(2).find('img').eq(0).attr('src');
            var bases = table.find('td').eq(3).html().replace(/<br>/g, "\n").replace(/<(.|\n)*?>/g, '').trim();
            var help = table.find('td').eq(3).find('span').eq(0).html().replace(/<br>/g, "\n").replace(/<(.|\n)*?>/g, '').trim();
            bases = bases.replace(help, '').trim();
            // console.log(header + "");
            // console.log(image + "");
            // console.log(bases + "");
            // console.log(help + "");
            results.push({
                header: header,
                image: image,
                bases: bases,
                help: help,
                tags: url.name
            });
	        // r = $(itemsrow[i]).find('td');

	        // var Runewords = r.eq(0).html();
	        // var Stats = r.eq(1).html();
	        // var Comments = r.eq(2).html();

	        // var tags = ['runeword'];

			// results.push({
			// 	name: Runewords,
			// 	description: Stats,
			// 	Comments: Comments,
			// 	tags: tags
			// });
		}
		callback();
	});
}, 10);


q.drain = function(){
    fs.writeFileSync('./json/q_crafts.json', JSON.stringify(results, null, 4));
}

for (murl of URL) {
	q.push(murl);	
}
