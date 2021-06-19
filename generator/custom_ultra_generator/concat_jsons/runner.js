var fs = require('fs').promises
let myCraftArray = []
try {
  fs.readFile(__dirname + '/q_crafts_all.json').then((data) => {
    var results = JSON.parse(data)
    myCraftArray = results
    getemData('q2_craft_blood.json', "Blood");
    getemData('q2_craft_caster.json', "Caster");
    getemData('q2_craft_hitpower.json', "Hitpower");
    getemData('q2_craft_safety.json', "Safety");
  })

  function getemData(inFile, inCase) {
    fs.readFile(__dirname + "/" +inFile).then( (data) => {
      var pre = data
        .toString()
        .replace(/'(.*?)':/gm, '"$1":')
        .replace(/\'/gm, '"')
      var pra = pre.replace(/`([\s\S]*?)`/gm, function (a, b) {
        return (
          '"' +
          b.replace(/\"/gm, '\\"').replace(/(?:\r\n|\r|\n)/gm, '<br />') +
          '"'
        )
      })
      pra = pra.replace(/\,\}/gm, '}')
      pra = pra.replace(/,\n+?\s+?}+/g, '')
      pra = pra.replace('\n', '')
      pra = pra.replace(/,\s+?}/gm, '}')

      praJ = JSON.parse(pra)
      for (let [indx, item] of praJ.entries()) {
        for (let craft of myCraftArray) {
          let header = craft['header']
          if (item['Items'].includes(header)) {
            item['Items'] = item['Items'].replace(header + '<br />', '')
            item['header'] = header
            item['img'] = craft['image']
            item['type'] = inCase
            break
          } else if (item['Items'].includes(header.replace('Armor', 'Body'))) {
            header = header.replace('Armor', 'Body')
            item['Items'] = item['Items'].replace(header + '<br />', '')
            item['header'] = craft['header']
            item['img'] = craft['image']
            item['type'] = inCase
            break
          } else if (item['Items'].includes(header.replace('Hit Power', 'Hitpower'))){
			
			header = header.replace('Hit Power', 'Hitpower')
            item['Items'] = item['Items'].replace(header + '<br />', '')
            item['header'] = craft['header']
            item['img'] = craft['image']
            item['type'] = inCase
            break
		  }
        }
      }
      console.log(praJ)
      fs.writeFile('./released_'+inFile, JSON.stringify(praJ, null, 4))
    })
  }
} catch (error) {
  console.error(error)
}
