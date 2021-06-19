<template>
  <div class="RuneWords">
    <h2>ITEM BASES</h2>
    <div id="filter">
      <!-- SEARCH BLOCK START -->
      <div class="inline_view_controls">
        <div>
          <span>Search by:</span>
          <input type="text" v-model="search" />
        </div>
      </div>
      <!-- SEARCH BLOCK END -->
      <!-- FILTER CONTROLLER SHOW/HIDE BLOCK START -->
      <div class="inline_filter_control">
        <button class="fast-filter" v-on:click="showFilter = !showFilter">
          <template v-if="!showFilter">show filter</template>
          <template v-else>hide filter</template>
        </button>
        <button
          class="fast-filter"
          v-if="filter !== ''"
          v-on:click="filter = ''"
        >
          clear filter
        </button>
      </div>
      <!-- FILTER CONTROLLER SHOW/HIDE BLOCK END -->
      <!-- FILTER CONTROLLER BLOCK START -->
      <div class="filterlist_wrapper" v-show="showFilter">
        <div class="filterlist_row">
          <span>Armors :</span>
          <button
            v-on:click="setFilter(filter.name)"
            class="fast-filter"
            v-for="filter in ArmorsList"
            :key="filter.name"
          >
            {{ filter.name }}
          </button>
        </div>
        <div class="filterlist_row">
          <span>Weapons :</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in WeaponsList"
            :key="filter"
            :class="(dontIgnoreList.indexOf(filter) !== -1)? '':'not-ready'"

          >
            {{ filter }}
          </button>
        </div>
        <div class="filterlist_row">
          <span>Class-specific Armor :</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in ClassSpecificArmor"
            :key="filter"
            
            :class="(dontIgnoreList.indexOf(filter) !== -1)? '':'not-ready'"
          >
            {{ filter }}
          </button>
        </div>
        <div class="filterlist_row">
          <span>Class-specific Weapons :</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in ClassSpecificWeapons"
            :key="filter"
            
            :class="(dontIgnoreList.indexOf(filter) !== -1)? '':'not-ready'"
          >
            {{ filter }}
          </button>
        </div>
      </div>
      <!-- FILTER CONTROLLER BLOCK END -->
    </div>
    <!-- ITEMS STYLED GRID -->
    <div class="grid-header grid">
      <div class="col-1 normal_items">Normal</div>
      <div class="col-2 exceptional_items">Exceptional</div>
      <div class="col-3 elite_items">Elite</div>
    </div>
    <div id="items-wrapper" v-if="displayStyle == 'grid'" class="grid">
      <div class="col-1 normal_items">
        <div
          v-for="(item, index) in normalItems"
          v-bind:key="item.Name + item.GroupTag"
          v-show="filteredJson(index)"
          class="item_wrapper"
        >
          <div class="item__image">
            <img :src="publicPath + item.Image" :alt="item.Name" />
          </div>
          <div class="item__name">{{ item.Name }}</div>
          <div v-html="getItemData(item)" class="item__info"></div>
        </div>
      </div>
      <div class="col-2 exceptional_items">
        <div
          v-for="(item, index) in exceptionalItems"
          v-bind:key="item.Name + item.GroupTag"
          v-show="filteredJson(index)"
          class="item_wrapper"
        >
          <div class="item__image">
            <img :src="publicPath + item.Image" :alt="item.Name" />
          </div>
          <div class="item__name">{{ item.Name }}</div>
          <div v-html="getItemData(item)" class="item__info"></div>
        </div>
      </div>
      <div class="col-3 elite_items">
        <div
          v-for="(item, index)  in eliteItems"
          v-bind:key="item.Name + item.GroupTag"
          v-show="filteredJson(index)"
          class="item_wrapper"
        >
          <div class="item__image">
            <img :src="publicPath + item.Image" :alt="item.Name" />
          </div>
          <div class="item__name">{{ item.Name }}</div>
          <div v-html="getItemData(item)" class="item__info"></div>
        </div>
      </div>
    </div>

    <!-- finding -->
  </div>
</template>

<script>
import belts from "../assets/bases/Belts.json";
import beltsElite from "../assets/bases/ExceptionalEliteBelts.json";
import boots from "../assets/bases/Boots.json";
import gloves from "../assets/bases/Gloves.json";
import bootsElite from "../assets/bases/ExceptionalEliteBoots.json";
import Shields from "../assets/bases/Shields.json";
import Armor from "../assets/bases/Armor.json";
import Helms from "../assets/bases/Helms.json";
import o1hAxes from "../assets/bases/1hAxes.json";
import o2hAxes from "../assets/bases/2hAxes.json";
import Bows from "../assets/bases/Bows.json";
import Crossbows from "../assets/bases/Crossbows.json";
import Daggers from "../assets/bases/Daggers.json";
import Javelins from "../assets/bases/Javelins.json";
import Maces from "../assets/bases/Maces.json";
import Polearms from "../assets/bases/Polearms.json";
import Scepters from "../assets/bases/Scepters.json";
import Spears from "../assets/bases/Spears.json";
import Staves from "../assets/bases/Staves.json";
import o1hSwors from "../assets/bases/1hSwords.json";
import o2hSwors from "../assets/bases/2hSwords.json";
import Throwing from "../assets/bases/Throwing.json";
import Wands from "../assets/bases/Wands.json";
import BarbarianHelms from "../assets/bases/BarbarianHelms.json";
import DruidPelts from "../assets/bases/DruidPelts.json";
import PaladinShields from "../assets/bases/PaladinShields.json";
import NecromancerShrunkenHeads from "../assets/bases/NecromancerShrunkenHeads.json";
import AmazonWeapons from "../assets/bases/AmazonWeapons.json";
import AssassinKatars from "../assets/bases/AssassinKatars.json";
import SorceressOrbs from "../assets/bases/SorceressOrbs.json";


import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import axios from "axios";

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

export default {
  name: "ItemBases",
  components: {
    //popper: Popper
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      dJson: [],
      normalSets: [],
      lodSets: [],
      filter: "",
      search: "",
      showFilter: false,
      displayStyle: "grid",
      dontIgnoreList: ['1h-Axes', '2h-Axes', 'Bows', 'Crossbows', 'Daggers', 'Javelins', 'Maces','Polearms', 'Scepters', 'Spears', 'Staves', 'Swords', 'Throwing', 'Wands',
      'Barbarian Helms', 'Druid Pelts', 'Paladin Shields', 'Necromancer Shrunken Heads', 'Amazon Weapons', 'Assassin Katars', 'Sorceress Orbs'],
      ArmorsList: [
        { name: "Helms" },
        { name: "Armor" },
        { name: "Shields" },
        { name: "Gloves" },
        { name: "Boots" },
        { name: "Belts" },
      ],
      WeaponsList: [
        "1h-Axes",
        "2h-Axes",
        "Bows",
        "Crossbows",
        "Daggers",
        "Javelins",
        "Maces",
        "Polearms",
        "Scepters",
        "Spears",
        "Staves",
        "Swords",
        "Throwing",
        "Wands",
      ],
      ClassSpecificArmor: [
        "Barbarian Helms",
        "Druid Pelts",
        "Paladin Shields",
        "Necromancer Shrunken Heads",
      ],
      ClassSpecificWeapons: [
        "Amazon Weapons",
        "Assassin Katars",
        "Sorceress Orbs",
      ],
      //beltsJson: belts
    };
  },
  computed: {
    normalItems: function () {
      return this.checkItemsToDiffAndFilter("Normal");
    },
    exceptionalItems: function () {
      return this.checkItemsToDiffAndFilter("Exceptional");
    },
    eliteItems: function () {
      return this.checkItemsToDiffAndFilter("Elite");
    },
    searchIndexes: function(){
      if (this.search !== ''){
        let searchText = this.search;
        let normalIndexes = this.getAllIndexes(this.normalItems, searchText);
        let exceptionalIndexes = this.getAllIndexes(this.exceptionalItems, searchText);
        let eliteIndexes = this.getAllIndexes(this.eliteItems, searchText);
        let result = [...normalIndexes,...exceptionalIndexes,...eliteIndexes];
        result = result.unique();
        return result
      }
      return null;
    }
  },
  methods: {
    getAllIndexes: function(arr, searchText) {
      var indexes = [], i;
      for(i = 0; i < arr.length; i++)
          if (arr[i].Name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
              indexes.push(i);
      return indexes;
    },
    checkItemsToDiffAndFilter: function (inDiff) {
      return this.dJson.filter((item) => {
        if (this.filter) {
          if (this.filter == item.tag) {
            return item.difficult == inDiff;
          }
        } else {
          return item.difficult == inDiff;
        }
      });
    },
    setFilter: function (inVal) {
      if (inVal) {
        this.filter = inVal;
      }
    },
    filteredJson: function (inIndex) {
      if (this.searchIndexes){
        if (this.searchIndexes.indexOf(inIndex) !== -1){
          return true;
        } else {
          return false;
        }
      } else
      return true;
    },
    getItemData: function (inItem) {
      var output = "";
      for (var property in inItem) {
        if (
          ["Name", "Image", "GroupTag", "tag", "difficult"].indexOf(property) ==
          -1
        ) {
          output +=
            this.propertyRefactor(property) +
            " : " +
            inItem[property] +
            "<br/>";
        }
      }
      return output;
    },
    propertyRefactor: function (inProp) {
      if (inProp == "Min_MaxDefense") {
        return "Min Max Defense";
      } else if (inProp == "MinStrength") {
        return "Min Strength";
      } else if (inProp == "_Boxes") {
        return "Boxes";
      } else if (inProp == "QualityLevel") {
        return "Quality Level";
      }
      return inProp;
    },
  },
  mounted() {},
  created() {
    this.dJson = belts.concat(beltsElite, boots, bootsElite, gloves, Shields, Armor, Helms, o1hAxes,
    o2hAxes, Bows, Crossbows, Daggers, Javelins, Maces, Polearms, Scepters, Spears, Staves, o1hSwors, o2hSwors, Throwing, Wands,
    BarbarianHelms, DruidPelts, PaladinShields, NecromancerShrunkenHeads, AmazonWeapons, AssassinKatars, SorceressOrbs);
  },
};
</script>

<style lang="scss">

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  padding: 20px 0;
  .col-1,
  .col-2,
  .col-3 {
    max-width: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    & > div {
      margin-top: 20px;
      word-break: break-all;
      margin-bottom: 20px;
    }
  }
}
.grid-header{
  padding-bottom: 0;
}
.item_wrapper {
  background: #020202;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  &:hover{
    transform: translateY(-30px);
  }
}
.item__image {
  padding-bottom: 15px;
}
.item__name {
  padding-bottom: 10px;

  font-weight: 600;
}
.item__info {
  line-height: 1.4;
}
.not-ready{
  text-decoration: line-through;
}
</style>