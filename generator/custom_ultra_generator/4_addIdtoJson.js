var fs = require('fs');
fs.readFile( __dirname + '/json/q.json', function (err, data) {
  if (err) {
    throw err; 
  }
  var results = JSON.parse(data);
  for(let [indx, item] of results.entries()){
  	item.id = indx;
  }
  fs.writeFileSync('./json/q.json', JSON.stringify(results, null, 4));
});