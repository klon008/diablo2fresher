var fs = require('fs')
fs.readFile( __dirname + '/Armor.json', function (err, data) {
  if (err) {
    throw err; 
  }
  var results = JSON.parse(data);
  for(let [indx, item] of results.entries()){
	if (item["GroupTag"] == "Normal Armor"){
		item["Type"] = item["QualityLevel"];
		item["QualityLevel"] = "-";
		item["LevelRequirement"] = "-";
	}
  }
  fs.writeFileSync('./Armor2.json', JSON.stringify(results, null, 4));
});