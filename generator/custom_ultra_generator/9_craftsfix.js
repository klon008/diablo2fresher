var fs = require('fs');

fs.readFile( __dirname + '/json/q_crafts.json', function (err, data) {
  if (err) {
    throw err; 
  }
  var results = JSON.parse(data);
  for(let [indx, item] of results.entries()){
 //  	let prepared = item.img;
 //  	var re = /<img.*?src=\"(.*?)\"/g;
	// var match = re.exec( prepared );
 //  	item.img = match[1]
 		let prepared = item.image;
		console.log(prepared)
 		let re = /(.*?\.gif)(.*)/;
 		let match = re.exec(prepared);
 		console.log(match[1]);
 		item.image = match[1];
  }

  fs.writeFileSync('./json/q_crafts.json', JSON.stringify(results, null, 4));
}
);