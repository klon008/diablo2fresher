var fs = require('fs').promises;
let result = [];

async function startLoading(){
	getemData('released_q2_craft_blood.json', "Blood");
	getemData('released_q2_craft_caster.json', "Caster");
	getemData('released_q2_craft_hitpower.json', "Hitpower");
	getemData('released_q2_craft_safety.json', "Safety").then((data)=>{
	fs.writeFile('./resulted.json', JSON.stringify(result, null, 4))}
	);
	
}

async function getemData(path, dummy){
	 
  
	let promise = new Promise((resolve, reject) => {
		fs.readFile( __dirname + "/" + path).then(data=>{
				var tmpR = JSON.parse(data);
				result = result.concat(tmpR);
				resolve("готово!")
			}
			
		);
	});
	return promise;
}
	
startLoading();
