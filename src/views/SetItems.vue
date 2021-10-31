<template>
  <div class="uniq_items">
    <h2>SET ITEMS</h2>
    <div id="filter">
      <!-- SEARCH BLOCK START -->
      <div class="inline_view_controls">
        <div>
          <span>Search by:</span>
          <input type="text" v-model="search" />
        </div>
        <div>
          display as:
          <button class="fast-filter" v-on:click="displayStyle='row'">row</button>
          <button class="fast-filter" v-on:click="displayStyle='grid'">grid</button>
        </div>
      </div>
      <!-- SEARCH BLOCK END -->
      <!-- FILTER CONTROLLER SHOW/HIDE BLOCK START -->
      <div class="inline_filter_control">
        <button class="fast-filter" v-on:click="showFilter = !showFilter">
          <template v-if="!showFilter">show filter</template>
          <template v-else>hide filter</template>
        </button>
        <button class="fast-filter" v-if="filter!==''" v-on:click="filter=''">clear filter</button>
      </div>
      <!-- FILTER CONTROLLER SHOW/HIDE BLOCK END -->
      <!-- FILTER CONTROLLER BLOCK START -->
      <div class="filterlist_wrapper" v-show="showFilter">
        <div class="filterlist_row">
          <span>Class-Specific Items :</span>
          <button
            v-on:click="setFilter(wfilter.set)"
            class="fast-filter"
            v-for="wfilter in classSpecifical"
            :key="wfilter.id"
            
            v-bind:class="[wfilter.set == filter ? 'active' : '']"
          >{{ wfilter.name }}</button>
        </div>
        <div class="filterlist_row">
          <span>Normal Sets :</span>
          <button
            v-on:click="setFilter(wfilter)"
            class="fast-filter"
            v-for="wfilter in normalSets"
            :key="wfilter.id"
            v-bind:class="[wfilter == filter ? 'active' : '']"
          >{{ wfilter}}</button>
        </div>
        <div class="filterlist_row">
          <span>LOD Sets :</span>
          <button
            v-on:click="setFilter(wfilter)"
            class="fast-filter"
            v-for="wfilter in lodSets"
            :key="wfilter.id"
            v-bind:class="[wfilter == filter ? 'active' : '']"
          >{{ wfilter}}</button>
        </div>
      </div>
      <!-- FILTER CONTROLLER BLOCK END -->
    </div>
    <!-- ITEMS STYLED GRID -->
    <div id="items-wrapper" v-if="displayStyle=='grid'">
      <div v-for="item in dJson" v-bind:key="item.id" v-show="filteredJson(item)">
        <popper trigger="hover" :options="{placement: 'top'}">
          <div class="popper description" v-html="item.description+'<br/><br/>'
          + '<span style=\'  color: #00c400;font-size: 1.1em;font-weight: 600;\'>'+ item.tags[2] + '</span><br/>'+item.partial"></div>
          <div slot="reference" class="pop-item">
            <div class="item-img">
              <img :src="(publicPath + item.img)" v-bind:alt="item.name" />
            </div>
            <div class="name" v-html="item.name"></div>
            <div class="subname" v-html="item.nameType"></div>
          </div>
        </popper>
      </div>
    </div>
    <!-- ROW STYLED ITEMS -->
    <div id="items-wrapper" class="row-styled" v-else-if="displayStyle=='row'">
      <div v-for="item in dJson" v-bind:key="item.id" v-show="filteredJson(item)">
        <div slot="reference" class="pop-item">
          <div class="item-img">
            <img :src="(publicPath + item.img)" v-bind:alt="item.name" />
          </div>
          <div class="name" v-html="item.name"></div>
          <div class="subname" v-html="item.nameType"></div>
          
        </div>
        <div v-html="item.description" class="description"></div>
        <div class="partial" v-html="'<span style=\'  color: #00c400;font-size: 1.1em;font-weight: 600;\'>'+ item.tags[2] + '</span><br/><br/>' + item.partial"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import axios from "axios";

export default {
  name: "SetItems",
  components: {
    popper: Popper
  },
  data: function() {
    return {
      publicPath: process.env.BASE_URL,
      dJson: [],
      normalSets: [],
      lodSets: [],
      filter: "",
      search: "",
      showFilter: false,
      displayStyle: "grid",
      classSpecifical: [
        {name: 'Druid Set', set: "Aldur's Watchtower"},
        {name: 'Barbarian Set', set: "Immortal King"},
        {name: 'Paladin Set', set: "Griswold's Legacy"},
        {name: 'Amazon Set', set: "M'avina's Battle Hymn"},
        {name: 'Assassin Set', set: "Natalya's Odium"},
        {name: 'Sorceress Set', set: "Tal Rasha's Wrappings"},
        {name: 'Necromancer Set', set: "Trang-Oul's Avatar"},
      ]
    };
  },
  methods: {
    setFilter: function(inVal) {
      if (inVal) {
        this.filter = inVal;
      }
    },
    filteredJson: function(item) {
      let tempData = true;
      if (this.filter) {
        tempData = this.filter && item.tags.indexOf(this.filter) !== -1;
      }
      if (this.search) {
        tempData =
          tempData &&
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      }

      return tempData;
    },
    uniqEliteTags: function(inStr) {
      return this.normalSets.filter(item => {
        return item.indexOf(inStr) !== -1;
      });
    }
  },
  watch: {},
  computed: {},
  created() {
    let axiosPrefix = "";
    if (process.env.NODE_ENV == "production") axiosPrefix = "/diablo2fresher";
    axios.get(axiosPrefix + "/json/qs.json").then(response => {
      if (response && response.data) {
        this.qrJson = response.data;
        let qjson = this.qrJson;
        let filteredJson = qjson.filter(item => {
          if (item.tags.indexOf("sets") !== -1) {
            return true;
          }
        });
        this.dJson = filteredJson;

        let normalSets = [];
        let lodSets = [];
        for (let item of qjson) {
          let wkmass;
          if (item.tags.indexOf('normal_sets')!==-1){
            wkmass = normalSets;
          } else if (item.tags.indexOf('lod_sets')!==-1){
            wkmass = lodSets;
          }
          for (let tag of item.tags) {
              
              if (tag !== "sets" && tag !== "normal_sets" && tag !== "lod_sets" && wkmass.indexOf(tag) == -1) {
                wkmass.push(tag);
              }
            }
        }
        this.normalSets = normalSets;
        this.lodSets = lodSets;
      }
    });
  },
  mounted() {}
};
</script>

<style  lang="scss" scoped>
#items-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  padding: 20px 0;
  &.row-styled {
    grid-template-columns: repeat(1, 1fr);
    & > div {
      display: flex;
      align-items: center;
      background: #000000;
      border-radius: 5px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
    .pop-item {
      cursor: pointer;
      width: 350px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
    }
    .description {
      width: 50%;
    }
    .partial{
      width: 50%;
      text-align: left;
    }
  }
}
select {
  width: 150px;
}
.row-styled{
  .item-img{
    margin-bottom:0;
  }  
}
.item-img {
  background: #000000;
  border-radius: 5px;
  min-height: 116px;
  display: flex;
  margin-bottom: 1em;
  justify-content: center;
  & > img {
    object-fit: contain;
  }
}
.popper {
  padding: 15px 5px;
  background: #000000eb;
  border: none;
  color: #ffffff;
  line-height: 1.35;
}
.pop-item {
  cursor: pointer;
}
.filter_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em;
  & > span {
    display: block;
  }
  
}
</style>