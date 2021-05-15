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
'Ing': `Magical Spear (any)
+ Jewel (any)
+ Sol Rune (#12)
+ Perfect Emerald`,
'Items': `Safety Weapon
Preset Mods:
Reduced Damage 1-4
Reduced Magic Damage 1-2
+5-10% Defense`,
'Comments':`The added defense is new in v1.09.`,
'group':'Safety Weapon',
                },{
'Ing': `Magical Crown
or Grand Crown (Excep)
or Corona (Elite)
+ Jewel (any)
+ Ith Rune (#6)
+ Perfect Emerald`,
'Items': `Safety Helm
Preset Mods:
Reduces Damage 1-4
Reduces Magic Damage 1-2
+5-10% Lightning Resistance
+10-30% Defense`,
'Comments':``,
'group':'Safety Headgear',
                },{
'Ing': `Magical Breast Plate
or Curiass (Excep)
or Great Hauberk (Elite)
+ Jewel (any)
+ Eth Rune (#5)
+ Perfect Emerald`,
'Items': `Safety Body
Preset Mods:
Reduces Damage 3-9
Reduces Magic Damage 2-5
Half Freeze Duration
Increased Defense 10-30%`,
'Comments':`Nice for a character who don't need big Defense or resistances on Armor, though the damage reductions are so small in v1.09 that it's pretty lame now.`,
'group':'Safety Armor',
                },{
'Ing': `Magical Gauntlets
or War Gauntlets (Excep)
or Ogre Gauntlets (Elite)
+ Jewel (any)
+ Ral Rune (#8)
+ Perfect Emerald`,
'Items': `Safety Gloves
Preset Mods:
Reduces Damage 1-4
Reduces Magical Damage 1-2
+5-10% Resist Cold
+10-33% Defense`,
'Comments':``,
'group':'Safety Gloves',
                },{
'Ing': `Magical Sash
or Demonhide Sash
or Spiderweb Sash
+ Jewel (any)
+ Tal Rune (#7)
+ Perfect Emerald`,
'Items': `Safety Belt
Preset Mods:
Reduces Damage 3-9
Reduces Magical Damage 2-5
5-10% Resist Poison
+10-30% Defense`,
'Comments':``,
'group':'Safety Belt',
                },{
'Ing': `Magical Greaves
or War Boots (Excep)
or Myrmidon Boots (Elite)
+ Jewel (any)
+ Ort Rune (#9)
+ Perfect Emerald`,
'Items': `Safety Boots
Preset Mods:
Reduces Damage 1-4
Reduces Magical Damage 1-2
5-10% Fire Resistance
+10-30% Defense`,
'Comments':`Greaves work.`,
'group':'Safety Belt',
                },{
'Ing': `Magical Kite Shield
or Dragon Shield (Excep)
or Monarch (Elite)
+ Jewel (any)
+ Nef Rune (#4)
+ Perfect Emerald`,
'Items': `Safety Shield
Preset Mods:
Reduces Damage 1-4
Reduces Magic Damage 1-2
5-10% Resist Magic
+10-30% Defense`,
'Comments':`Magical Resistance is a very rare property. Magical damage is only on a few skills, such as Berserk and Bone Spirit.`,
'group':'Safety Shields',
                },{
'Ing': `Magical Amulet
+ Jewel (any)
+ Thul Rune (#10)
+ Perfect Emerald`,
'Items': `Safety Amulet
Preset Mods:
Reduces Damage 1-4
Reduces Magic Damage 1-2
+1-10% Blocking`,
'Comments':``,
'group':'Safety Jewelry',
                },{
'Ing': `Rare or Magical Ring
+ Jewel (any)
+ Amn Rune (#11)
+ Perfect Emerald`,
'Items': `Safety Ring
Preset Mods:
Reduces Damage 1-4
Reduces Magic Damage 1-2
+1-5 Vitality`,
'Comments':``,
'group':'Safety Jewelry',
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