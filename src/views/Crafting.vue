<template>
  <div class="crafting">
    <h2>CRAFTING</h2>
    <div id="filter">
      <!-- SEARCH BLOCK START -->
      <div class="inline_view_controls">
        <div>
          <span>Search:</span>
          <input type="text" v-model="search" />
        </div>
      </div>
      <button class="fast-filter" v-on:click="showFaq = !showFaq">FAQ</button>
      <button class="fast-filter" v-on:click="itemsFilter = 'All'">
        All Recipes
      </button>
      <button class="fast-filter" v-on:click="itemsFilter = 'Blood'">
        Blood Recipes
      </button>
      <button class="fast-filter" v-on:click="itemsFilter = 'Caster'">
        Caster Recipes
      </button>
      <button class="fast-filter" v-on:click="itemsFilter = 'Hitpower'">
        Hitpower Recipes
      </button>
      <button class="fast-filter" v-on:click="itemsFilter = 'Safety'">
        Safety Recipes
      </button>
      <div class="hint-text" v-show="showFaq">
        <pre>
<strong>Ingredients:</strong> The mods on the item you use in the recipe have no effect on the crafted item you create. The affixes are re-rolled completely, using the base item so don't use a Cruel weapon and expect the Blood weapon you get out of that to have 350% damage.

<strong>Random mods:</strong> The maximum ilvl of affixes for random mods is determined by the Clvl of the character executing the recipe, by the following formula:

At ilvls 1-30, there's a 40% chance of 1 affix and a 20% chance each of 2, 3 or 4 affixes.
At ilvls 31-50, there's a 60% chance of 2 affixes and a 20% chance each of 3 or 4 affixes.
At ilvls 51-70, there's an 80% chance of 3 affixes and a 20% chance of 4 affixes.
At ilvls 71+, there's a 100% chance of 4 affixes.
You can create items with a Clvl higher than your current level, so making them with a very high level character might make things your other characters won't be able to equip. See the <a href="https://diablo2.diablowiki.net/Crafting_FAQ?__cf_chl_jschl_tk__=cad2554a67cf41aba765cf1d5efd33eb64e8d9d1-1621100213-0-ATGQsAEfYo2EToheggtkccjR6ZJkKtyC69p8eDj7X7E9dx7AZaLlqGgyjVTzTZl3Z5jJE3hniajuMcHG_hNg12V3QU8d9fZ78Az5mSIau9HQ_ey4YhkvYkOMdsLyhXPtloCI5k3-vCzdJXoG3kq1w2ScyvlwQmNu5D54Zlxvh_el5xuqgKq9Qle9Qf_anDJhspqqUHDhWWBo-Xe7QeX0i2cDVRONaeFh_ZJZFxezw_P59FpATQUlOLfOrmJKRCxQLE_P0Sh5Kv84p_xMdo5DDfa1dAVilcX58Zn6dVYHbDNQSYBlC4pdSgnNnNbEs6NHgxfS9wbZXqzZn_5SW5fp8te4KEdjsV8iKPQQZ7OBHz2_vfl4v_zVAWwM5dbTfhXia9JjUcB9zaPUw_sLET4lAD0gnh_uvodhUIwlWYzfj84e">Crafting FAQ</a> for more details.

All recipes will generate with the preset mods, and from one to four random prefixes and suffixes.
Jewel may be magical or rare.
Magical: All items must be magical. (Not rare, unique, set, crafted, etc.)
All recipes work with the <strong>normal</strong>, <strong>exceptional</strong>, or <strong>elite</strong> version of the item type. Use the excep or elite if you want higher defense or damage.
</pre>
      </div>
      <div class="items">
        <div class="table">
          <div class="header">
            <div class="cell">Ingredients</div>
            <div class="cell">Crafted Item</div>
            <div class="cell">Comments</div>
          </div>
          <template
            v-for="(groupedData, groupName) of qrJson"
            
          >
            <div class="body" v-show="itemsFilter == 'All' || itemsFilter == groupName" v-bind:key="groupName">
              <div class="row" v-show="search == ''||searchRes.indexOf(groupName) !== -1">
                <div class="cell colspan-all">
                  {{ groupName }}
                </div>
                <div class="cell"></div>
                <div class="cell"></div>
              </div>
              <div
                v-for="row in groupedData"
                v-bind:key="row.header"
                class="row"
                v-show="searchText(row)"
              >
                <div class="cell">
                  <div style="text-align: center; width: 100%;margin-top:1em;"><img :src="publicPath + row.img" /></div>
                  <pre v-html="row.Ing" class="ingr"></pre>
                </div>
                <div class="cell">
                  <div style="text-align: center; width: 100%;margin-top:1em;"><img :src="publicPath + row.img" /></div>
                  <div class="item-head_wrap">
                    <strong class="item-head">{{ row.header }}</strong>
                  </div>
                  <pre v-html="row.Items"></pre>
                </div>
                <div class="cell" v-html="row.Comments"></div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import axios from "axios";

export default {
  name: "Crafting",
  components: {},
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      itemsFilter: "All",
      showFaq: false,
      filter: "",
      search: "",
      showFilter: false,
      displayStyle: "grid",
      qrJson: [],
      searchRes: [],
    };
  },
  methods: {
    searchText: function(inRow){
        if (this.search == '') return true;
        for(var index in inRow) { 
            if (Object.hasOwnProperty.call(inRow, index)) {
                var attr = inRow[index];
                if (attr.toLowerCase().indexOf(this.search.toLowerCase()) !== -1) {
                  this.searchRes.indexOf(inRow.type) === -1 ? this.searchRes.push(inRow.type):'';
                  return true;
                  }
            }
        }
        return false;
    },
    groupBy(xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
  },
  watch: {
    search: function (val, oldVal) {
      this.$emit("search", val);
      this.searchRes = [];
    },
  },
  computed: {},
  created() {
    let axiosPrefix = "";
    if (process.env.NODE_ENV == "production") axiosPrefix = "/diablo2fresher";
    axios.get(axiosPrefix + "/json/resulted_craft.json").then((response) => {
      if (response && response.data) {
        this.qrJson = this.groupBy(response.data, "type");
      }
    });
  },
  mounted() {},
};
</script>

<style  lang="scss" scoped>
#filter {
  text-align: left;
}
.fast-filter {
  background: none !important;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-family: Arial, Helvetica, Sans-Serif;
  font-size: 13px;
  color: #928a70;
  font-weight: bold;
  padding: 5px;
  &:hover {
    color: #beb9ab;
  }
  &:focus {
    outline: none;
  }
}
.hint-text {
  text-align: left;
}
.hint-text pre {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
}
.items {
  width: 100%;
}
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
.ingr:first-line{
  font-weight: bold;
  color: blue;
}
.item-head_wrap{
    margin-top: 1em;
}
.item-head{

  color: rgb(255, 165, 0);
}
</style>