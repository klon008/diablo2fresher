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
    name: "Caster",
    data: function() {
        return {
            filter: '',
            dataC: [
                {
'Ing': `Magical Rod (any)
+ Jewel
+ Tir Rune (#3)
+ Perfect Amethyst`,
'Items': `Caster Weapon
Preset Mods:
4-10% Regenerate Mana
+10-20 Mana
+1-5% Mana Steal`,
'Comments':`"Rod" = Scepter, Staff, or Wand (Not Orbs).`,
'group':'Caster Weapon',
                },{
'Ing': `Magical Mask
or Death Mask (Excep)
or Demonhead (Elite)
+ Jewel
+ Nef Rune (#4)
+ Perfect Amethyst`,
'Items': `Caster Mask
Preset Mods:
4-10% Regenerate Mana
+10-20 Mana
1-4% Mana Steal`,
'Comments':``,
'group':'Caster Headgear',
                },{
'Ing': `Magical Light Plate
or Mage Plate (Excep)
or Archon Plate (Elite)
+ Jewel (any)
+ Tal Rune (#7)
+ Perfect Amethyst`,
'Items': `Caster Body
Preset Mods:
Regenerate Mana 4-12%
+10-20 Mana
+1-3 Mana Per Kill`,
'Comments':`Same mods as the other "Caster" Crafted Items, and all use common Runes.`,
'group':'Caster Armor',
                },{
'Ing': `Magical Leather Gloves
or Demonhide Gloves (Excep)
or Bramble Mitts (Elite)
+ Jewel (any)
+ Ort Rune (#9)
+ Perfect Amethyst`,
'Items': `Caster Gloves
Preset Mods:
+4-10% Faster Mana Regen
+10-20 Mana
+1-3 Mana Per Kill`,
'Comments':`Not quite Frostburns or Magefist, but they add some decent mana, and the ingredients are easy to find.`,
'group':'Caster Gloves',
                },{
'Ing': `Magical Light Belt
or Sharkskin Belt (Excep)
or Vampirefang Belt (Elite)
+ Jewel (any)
+ Ith Rune (#6)
+ Perfect Amethyst`,
'Items': `Caster Belt
Preset Mods:
4-10% Regenerate Mana
+10-20 Mana
+5-10% Faster Cast`,
'Comments':`This one changed from v1.08 where it was a heavy belt, and 15% faster cast. So fewer belt slots, and less casting speed in v1.09.`,
'group':'Caster Belt',
                },{
'Ing': `Magical Leather Boots
or Demonhide Boots (Excep)
or Wyrmhide Boots (Elite)
+ Jewel (any)
+ Thul Rune (#10)
+ Perfect Amethyst`,
'Items': `Caster Boots
Preset Mods:
Regenerate Mana 4-10%
Mana +10-20
Max Mana +2-5%`,
'Comments':`A lot of variety in the pre-set mods, so several tries will probably be needed to get really good ones.`,
'group':'Caster Boot',
                },{
'Ing': `Magical Small Shield
or Round Shield (Excep)
or Luna (Elite)
+ Jewel (any)
+ Eth Rune (#5)
+ Perfect Amethyst`,
'Items': `Caster Shield
Preset Mods:
+4-10% Regenerate Mana
+10-20 Mana
+5-10 Blocking Percentage`,
'Comments':`Only the mana regeneration was altered in v1.09, and this now works only with a small shield.`,
'group':'Caster Shield',
                },{
'Ing': `Magical Amulet
+ Jewel (any)
+ Ral Rune (#8)
+ Perfect Amethyst`,
'Items': `Caster Amulet #1
Preset Mods:
4-10% Regenerate Mana
+10-20 Mana
Faster Cast 5-10%`,
'Comments':`Potentially the best possible amulet for a sorceress or necro can be made with this recipe. This item was toned way down in v1.09, with the potential bonuses for all 3 preset stats dropping quite a bit. An example can be <a href="https://diablo2.diablowiki.net/Caster_Amulet">seen here</a>.`,
'group':'Caster Jewelry',
                },{
'Ing': `Magical Ring
+ Jewel (any)
+ Amn Rune (#11)
+ Perfect Amethyst`,
'Items': `Caster Ring #1
Preset Mods:
4-10% Regenerate Mana
+10-20 Mana
+1-5 Energy`,
'Comments':`v1.09 changed the rune required from 7 to 11, and lowered the energy bonus from 5-10.`,
'group':'Caster Jewelry',
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