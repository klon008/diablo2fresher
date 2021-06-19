var fs = require('fs');
// fs.readFile( __dirname + '/json/q.json', function (err, data) {
//   if (err) {
//     throw err; 
//   }
//   var results = JSON.parse(data);
//   for(let [indx, item] of results.entries()){
//   	item.name = item.name.replace(/<(.|\n)*?>/g, '');
//   }
//   fs.writeFileSync('./json/q.json', JSON.stringify(results, null, 4));
// }
// );
// fs.readFile( __dirname + '/json/qs.json', function (err, data) {
//   if (err) {
//     throw err; 
//   }
//   var results = JSON.parse(data);
//   for(let [indx, item] of results.entries()){
//   	let match = item.name.split(/(.+)\<br\>\\?n?(.+)/g);
//   	if (!match[2]) {
//   		console.log(item)
//   		console.log(match[2])
//   	}
//   	item.subname = match[2].replace(/<(.|\n)*?>/g, '').trim();
//   	item.name = match[1].replace(/<(.|\n)*?>/g, '').trim();
  	
//   	//item.name = match[].replace(/<(.|\n)*?>/g, '').trim();
//   }
//   console.log(results);
//   fs.writeFileSync('./json/qs.json', JSON.stringify(results, null, 4));
// }
// );
// fs.readFile( __dirname + '/json/qr.json', function (err, data) {
//   if (err) {
//     throw err; 
//   }
//   var results = JSON.parse(data);
//   for(let [indx, item] of results.entries()){
//   	let prepared = item.name;
//   	let match = prepared.replace(/<(.|\n)*?>/g, '').split('\n');
//   	let newName = match[0].trim();
//   	let newNeededRunes = match[1].trim();
//   	let newNeededRunesPlus = match[2].trim();
//   	let itemType = match[3].trim();
//   	let clvl = match[4].trim();
//   	item.name = newName;
//   	item.runes = newNeededRunes;
//   	item.runesDetailed = newNeededRunesPlus;
//   	item.itemType = itemType;
//   	item.clvl = clvl;
//   }

//   fs.writeFileSync('./json/qr.json', JSON.stringify(results, null, 4));
// }
// );
fs.readFile( __dirname + '/json/runes.json', function (err, data) {
  if (err) {
    throw err; 
  }
  var results = JSON.parse(data);
  for(let [indx, item] of results.entries()){
 //  	let prepared = item.img;
 //  	var re = /<img.*?src=\"(.*?)\"/g;
	// var match = re.exec( prepared );
 //  	item.img = match[1]
 		let prepared = item.Rune;
 		let re = /<a.*?title=\"(.*?)\"/g;
 		let match = re.exec(prepared);
 		console.log(match[1]);
 		item.Rune = match[1];
  }

  fs.writeFileSync('./json/runes.json', JSON.stringify(results, null, 4));
}
);