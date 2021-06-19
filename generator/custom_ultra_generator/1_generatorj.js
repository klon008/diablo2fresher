var tress = require('tress');
var needle = require('needle');
var cheerio = require('cheerio');
var resolve = require('url').resolve;
var fs = require('fs');

var URL = ["/diablo2exp/items/normal/urings.shtml", "/diablo2exp/items/normal/uamulets.shtml", "/diablo2exp/items/normal/ucharms.shtml", "/diablo2exp/items/normal/ujewels.shtml", "/diablo2exp/items/normal/ucirclets.shtml", "/diablo2exp/items/normal/uamazon.shtml", "/diablo2exp/items/normal/uassassin.shtml", "/diablo2exp/items/normal/unecromancer.shtml", "/diablo2exp/items/normal/ubarbarian.shtml", "/diablo2exp/items/normal/usorceress.shtml", "/diablo2exp/items/normal/udruid.shtml", "/diablo2exp/items/normal/upaladin.shtml", "/diablo2exp/items/normal/uhelms.shtml", "/diablo2exp/items/normal/uarmor.shtml", "/diablo2exp/items/normal/ushields.shtml", "/diablo2exp/items/normal/ugloves.shtml", "/diablo2exp/items/normal/uboots.shtml", "/diablo2exp/items/normal/ubelts.shtml", "/diablo2exp/items/normal/uaxes.shtml", "/diablo2exp/items/normal/ubows.shtml", "/diablo2exp/items/normal/ucrossbows.shtml", "/diablo2exp/items/normal/udaggers.shtml", "/diablo2exp/items/normal/umaces.shtml", "/diablo2exp/items/normal/upolearms.shtml", "/diablo2exp/items/normal/uscepters.shtml", "/diablo2exp/items/normal/uspears.shtml", "/diablo2exp/items/normal/ustaves.shtml", "/diablo2exp/items/normal/uswords.shtml", "/diablo2exp/items/normal/uwands.shtml", "/diablo2exp/items/exceptional/uhelms.shtml", "/diablo2exp/items/exceptional/uarmor.shtml", "/diablo2exp/items/exceptional/ushields.shtml", "/diablo2exp/items/exceptional/ugloves.shtml", "/diablo2exp/items/exceptional/uboots.shtml", "/diablo2exp/items/exceptional/ubelts.shtml", "/diablo2exp/items/exceptional/uaxes.shtml", "/diablo2exp/items/exceptional/ubows.shtml", "/diablo2exp/items/exceptional/ucrossbows.shtml", "/diablo2exp/items/exceptional/udaggers.shtml", "/diablo2exp/items/exceptional/umaces.shtml", "/diablo2exp/items/exceptional/upolearms.shtml", "/diablo2exp/items/exceptional/uscepters.shtml", "/diablo2exp/items/exceptional/uspears.shtml", "/diablo2exp/items/exceptional/ustaves.shtml", "/diablo2exp/items/exceptional/uswords.shtml", "/diablo2exp/items/exceptional/uthrowing.shtml", "/diablo2exp/items/exceptional/uwands.shtml", "/diablo2exp/items/elite/uhelms.shtml", "/diablo2exp/items/elite/uarmor.shtml", "/diablo2exp/items/elite/ushields.shtml", "/diablo2exp/items/elite/ugloves.shtml", "/diablo2exp/items/elite/uboots.shtml", "/diablo2exp/items/elite/ubelts.shtml", "/diablo2exp/items/elite/uaxes.shtml", "/diablo2exp/items/elite/ubows.shtml", "/diablo2exp/items/elite/ucrossbows.shtml", "/diablo2exp/items/elite/udaggers.shtml", "/diablo2exp/items/elite/ujavelins.shtml", "/diablo2exp/items/elite/umaces.shtml", "/diablo2exp/items/elite/upolearms.shtml", "/diablo2exp/items/elite/uscepters.shtml", "/diablo2exp/items/elite/uspears.shtml", "/diablo2exp/items/elite/ustaves.shtml", "/diablo2exp/items/elite/uswords.shtml", "/diablo2exp/items/elite/uthrowing.shtml", "/diablo2exp/items/elite/uwands.shtml", "/diablo2exp/items/uniques.shtml"];


var results = [];


var q = tress(function(url, callback){
	needle.get(url, function(err, res){

        if (err) throw err;
        // парсим DOM
        var $ = cheerio.load(res.body, { decodeEntities: false });
        var items = $('table')[10];

        var itemsrow = $(items).find('tr');
        itemsrow = Array.prototype.slice.call(itemsrow);
        itemsrow.splice(0, 1);
        for (var i = 0; i < itemsrow.length; i++) {

	        r = $(itemsrow[i]).find('td');

	        var img = $(r[0]).find('img').eq(0).attr('src');
	        var name  = $(r[0]).find('center').eq(0).html();
	        var nameType = $(r[0]).find('center').eq(1).html();
	        var description = $(r[1]).html();
	        var tags = [$(items).find('center font').eq(0).text(), 'unique'];

			results.push({
				img: img,
				name: name,
				nameType: nameType,
				description: description,
				tags: tags
			});
		}
		callback();
	});
}, 10);


q.drain = function(){
    fs.writeFileSync('./json/q.json', JSON.stringify(results, null, 4));
}

for (murl of URL) {
	q.push("http://classic.battle.net/" + murl);	
}
