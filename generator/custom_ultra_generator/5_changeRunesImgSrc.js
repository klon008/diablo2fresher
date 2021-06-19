var fs = require('fs');
fs.readFile( __dirname + '/json/Runes.vue',  "utf8", function (err, data) {
	if (err) {
		throw err; 
	}
	//просто ссылки на картинки Рун
	const searchRegExp = new RegExp( /(https:\/\/diablo2\.diablowiki\.net\/images\/.+?\/.+?\/R-)(.+?).gif/g )
	let results = data.replace(searchRegExp, function($1, $2, $3){ 
		let strStart = "img/runes/28px-";
		let strEnd = "_Rune.png"
		return strStart + $3.charAt(0).toUpperCase() + $3.slice(1) + strEnd;
	})
	//файлы
	const searchRegExp2 = new RegExp( /(https:\/\/diablo2\.diablowiki\.net\/File:R-)(.+?).gif/g )
	let results2 = results.replace(searchRegExp2, function($1, $2, $3){ 
		let strStart = "img/runes/File:28px-";
		let strEnd = "_Rune.png"
		return strStart + $3.charAt(0).toUpperCase() + $3.slice(1) + strEnd;
	})
	//Топазы
	const searchRegExp3 = new RegExp( /(https:\/\/diablo2\.diablowiki\.net\/images\/.+?\/.+?\/)(.+?).gif/g )
	let results3 = results2.replace(searchRegExp3, function($1, $2, $3){
		console.log($3);
		let strStart = "img/runes/";
		let strEnd = "_(Diablo_II).gif"
		let splitted = $3.split('-')

		splitted.forEach(function(part, i, splitted) {
		  splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);;
		});
		splitted = splitted.filter(e=>(e!=='Normal'))

		let res = strStart + splitted.reverse().join("_") + strEnd;
		return res;
	})
	const searchRegExp4 = new RegExp(/(https:\/\/diablo2\.diablowiki\.net\/File:)(.+?).gif/g)
	let results4 = results3.replace(searchRegExp4, function($1, $2, $3){
		console.log($3);
		let strStart = "img/runes/";
		let strEnd = "_(Diablo_II).gif"
		let splitted = $3.split('-')

		splitted.forEach(function(part, i, splitted) {
		  splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);;
		});
		splitted = splitted.filter(e=>(e!=='Normal'))

		let res = strStart + splitted.reverse().join("_") + strEnd;
		return res;
	})
	const searchRegExp5 = new RegExp(/(https:\/\/diablo2\.diablowiki\.net\/)(.+?)\"/g)
	let results5 = results4.replace(searchRegExp5, 'runes/$2"')
	fs.writeFileSync('./json/RunesF.vue', results5);
});