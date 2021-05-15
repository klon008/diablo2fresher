<template>
<div class="table">
            <div class="header">
              <div class="cell">
              Ingredients
              </div>
              <div class="cell">
              Crafted Item
              </div>
              <div class="cell">
              Comments
              </div>
            </div>
            <div class="body">
              <template v-for="(rowType) in rowsData">
              <div class="row" v-bind:key="'rows'+rowType" v-show="filter == ''">
                <div class="cell colspan-all">
                  {{rowType}}
                </div>
                <div class="cell">

                </div>
                <div class="cell"></div>
              </div>
              <div class="row" v-for="(item) in dataCF(rowType)" v-bind:key="item.Ing" v-show="searchText(item)">
                <div class="cell">
                  <pre v-html="item.Ing"></pre>
                </div>
                <div class="cell">
                  <pre v-html="item.Items"></pre>
                </div>
                <div class="cell" v-html="item.Comments">
                </div>
              </div>
              </template>
            </div>
            
          </div>
</template>

<script>
export default {
    name: "Blood",
    data: function() {
        return {
            filter: '',
            dataC: [
                {
'Ing': `Magical Axe (any)
+ Jewel (any)
+ Ort Rune (#9)
+ Perfect Ruby`,
'Items': `Blood Weapon
Preset Mods:
1-4% Life Leech
+10-20 Hit Points
+35-60% Damage`,
'Comments':`Enhanced damage changed slightly in v109, and the recipe was restricted to axes, instead of every type of weapon, which worked previously.`,
'group':'Blood Weapon',
                },{
'Ing': `Magical Helm
or Casque (Excep)
or Armet (Elite)
+ Jewel (any)
+ Ral Rune (#8)
+ Perfect Ruby`,
'Items': `Blood Helm
Preset Mods:
1-4% Life Leech
+10-20 Hit Points
5-10% chance of Deadly Strike`,
'Comments':``,
'group':'Blood Headgear',
                },{
'Ing': `Magical Plate Mail
or Templar Plate (Excep)
or Hellforge Plate (Elite)
+ Jewel (any)
+ Thul Rune (#10)
+ Perfect Ruby`,
'Items': `Blood Body
Preset Mods:
1-3% Life Steal
+10-20 Hit points
1-3 Demon Heal`,
'Comments':`"Demon Heal" means you gain 1-3 hit points for every Demon death, similar to the +mana per kill modifiers. Full details on the <a href='https://diablo2.diablowiki.net/Special_Modifiers'>Special Modifiers</a> page.`,
'group':'Blood Armor',
                },{
'Ing': `Magical Heavy
or Sharkskin Gloves (Excep)
or Vampirebone Gloves (Elite)
+ Jewel (any)
+ Nef Rune (#4)
+ Perfect Ruby`,
'Items': `Blood Gloves
Preset Mods:
1-3% Life Leech
+10-20 Hit Points
5-10% Crushing Blow`,
'Comments':`An example can be <a href="https://diablo2.diablowiki.net/Blood_Gloves">seen here</a>.`,
'group':'Blood Gloves',
                },{
'Ing': `Magical Belt
or Mesh Belt (Excep)
or Mithril Coil (Elite)
+ Jewel (any)
+ Tal Rune (#7)
+ Perfect Ruby`,
'Items': `Blood Belt
Preset Mods:
1-3% Life Leech
+10-20 Hit Points
Open Wounds 5-10%`,
'Comments':`Must be a "belt", the smaller of the two 12 slot types. No others will work.`,
'group':'Blood Belt',
                },{
'Ing': `Magical Spiked Shield
or Barbed Shield (Excep)
or Blade Barrier (Elite)
+ Jewel (any)
+ Ith Rune (#6)
+ Perfect Ruby`,
'Items': `Blood Shield
Preset Mods:
1-4% Life Steal
+10-20 Hit Points
Attacker takes 4-7 damage`,
'Comments':``,
'group':'Blood Shield',
                },{
'Ing': `Magical Amulet
+ Jewel (any)
+ Amn Rune (#11)
+ Perfect Ruby`,
'Items': `Blood Amulet
Preset Mods:
1-4% Life Steal
+10-20 Hit Points
5-10% Faster Walk/Run`,
'Comments':`Was 1-15% faster run prior to v1.09. See some examples here.`,
'group':'Blood Jewelry',
                },{
'Ing': `Magical Ring
+ Jewel (any)
+ Sol Rune (#12)
+ Perfect Ruby`,
'Items': `Blood Ring
Preset Mods:
1-3% Life Leech
+10-20 Hit Points
+1-5 Strength`,
'Comments':`The leech was cut from 1-4% and the strength from 5-10 in v1.09. See a couple of examples.`,
'group':'Blood Jewelry',
                }
            ],
            rowsData: [],
            
        }
    },
    methods:{
        dataCF: function(inF){
            var filtered = this.dataC.filter((elem)=>{
                return elem.group == inF;
            });
            return filtered;
        },
        searchValue: function(inVal){
            this.filter = inVal;
        },
        searchText: function(inRow){
            if (this.filter == '') return true;
            for(var index in inRow) { 
                if (Object.hasOwnProperty.call(inRow, index)) {
                    var attr = inRow[index];
                    if (attr.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1) return true;
                }
            }
            return false;
        }
    },
    created(){
                this.$parent.$on('search', this.searchValue);
                var arr = [];
                for (var i=0;i<this.dataC.length;i++){
                    
                    if ( arr.indexOf(this.dataC[i].group) == -1){
                    arr.push(this.dataC[i].group);
                    }
                }
                this.rowsData = arr;
                
    }
}
</script>
<style   lang="scss" scoped>
.table{
  display: table;
	width: 100%;
  padding:0;
  .body{
    display: table-row-group;
  }
  .header{
      display: table-header-group;
      background: #000000;
      .cell{
        border: 1px solid #202020;
        display: table-cell;
        padding: 7px 10px;
        background: #000000;
        font-weight: bold;
        text-align: center;
      }
  }
  .row{
    display: table-row;
    .cell{
      border: 1px solid #202020;
      display: table-cell;
      padding: 3px 10px;
      background: #000000;
      pre{
        font-family: Avenir, Helvetica, Arial, sans-serif;
      }
    }
    .colspan-all{
      column-span: all;
      border-right: none !important;
      padding: 10px;
      font-weight: bold;
      &+.cell{
        border-left: none;
        border-right: none;
        &+.cell{
          border-left: none;
        border-right: none;
        }
      }
    }
    
  }
}
</style>