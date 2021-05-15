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
'Ing': `Magical Blunt Weapon
+ 1 Jewel (any)
+ Tir Rune (#3)
+ Perfect Sapphire`,
'Items': `Hitpower Weapon
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker Takes 3-7 Damage
+35-60% Enhanced Damage`,
'Comments':`"Blunt" = All maces, rods, etc. Everything that has 150% damage vs. Undead excluding Orbs.`,
'group':'Hitpower Weapon',
                },{
'Ing': `Magical Full Helm
or Basinet (Excep)
or Giant Conch (Elite)
+ Jewel (any)
+ Ith Rune (#6)
+ Perfect Sapphire`,
'Items': `Hitpower Helm
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-7 damage
+25-50 Defense vs. Missiles`,
'Comments':`The defense vs. missiles is added in v1.09 with knockback removed.`,
'group':'Hitpower Headgear',
                },{
'Ing': `Magical Field Plate
or Sharktooth (Excep)
or Kraken Shell (Elite)
+ Jewel (any)
+ Nef Rune (#4)
+ Perfect Sapphire`,
'Items': `Hitpower Body Armor
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-10 damage
10-20% Faster Hit Recovery`,
'Comments':`Howling removed, FHR added, armor type changed to Field Plate.`,
'group':'Hitpower Armor',
                },{
'Ing': `Magical Chain Gloves
or Heavy Bracers (Excep)
or Vambraces (Elite)
+ Jewel (any)
+ Ort Rune (#9)
+ Perfect Sapphire`,

'Items': `Hitpower Gloves
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
+3-7 Damage to Attacker
Knockback`,
'Comments':`Knockback is added to your attack, a popular mod to many Bowazons.`,
'group':'Hitpower Gloves',
                },{
'Ing': `Magical Heavy Belt
or Battle Belt (Excep)
or Troll Belt (Elite)
+ Jewel (any)
+ Tal Rune (#7)
+ Perfect Sapphire`,

'Items': `Hitpower Belt
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-7 damage
5-10% Damage to Mana`,
'Comments':``,
'group':'Hitpower Belt',
                },{
'Ing': `Magical Chain Boots
or Mesh Boots (excep)
or Boneweave (Elite)
+ Jewel (any)
+ Ral Rune (#8)
+ Perfect Sapphire`,

'Items': `Hitpower Boots
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-7 damage
+25-60 Defense vs. Melee`,
'Comments':``,
'group':'Hitpower Boots',
                },{
'Ing': `Magical Gothic Shield
or Ancient (Excep)
or Ward (Elite)
+ Jewel (any)
+ Eth Rune (#5)
+ Perfect Sapphire`,

'Items': `Hitpower Shield
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-10 damage
+5-10% Blocking`,
'Comments':``,
'group':'Hitpower Shield',
                },{
'Ing': `Magical Amulet
+ Jewel (any)
+ Thul Rune (#10)
+ Perfect Sapphire`,

'Items': `Hitpower Amulet
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-10 damage
5-15% Chance of Monster Flee`,
'Comments':`Howling replaces Faster Hit Recovery in v1.09.`,
'group':'Hitpower Jewelry',
                },{
'Ing': `Magical Ring
+ Jewel (any)
+ Amn Rune (#11)
+ Perfect Sapphire`,

'Items': `Hitpower Ring
Preset Mods:
5% chance of casting Slvl 4 Frost Nova when hit
Attacker takes 3-6 damage
+1-5 Dexterity`,
'Comments':`+5-10 Dexterity was the mod pre v1.09.`,
'group':'Hitpower Jewelry',
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