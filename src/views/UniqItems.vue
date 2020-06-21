<template>
  <div class="uniq_items">
    <h2>UNIQUE ITEMS</h2>
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
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter of justUniqueRow"
            :key="filter"
          >{{ filter.match(/[^Unique]\S+/g)[0] }}</button>
        </div>
        <div class="filterlist_row">
          <span>Class-Specific Items :</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in classSpecific"
            :key="filter"
          >{{ filter.match(/[^Unique]\S+[^Items]/g)[0] }}</button>
        </div>
        <div class="filterlist_row">
          <span>Normal Unique :</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in uniqEliteTags('Normal Unique ')"
            :key="filter"
          >{{ filter.replace('Normal Unique ', '') }}</button>
        </div>
        <div class="filterlist_row">
          <span>Exceptional Unique:</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in uniqEliteTags('Exceptional Unique ')"
            :key="filter"
          >{{ filter.replace('Exceptional Unique ', '') }}</button>
        </div>
        <div class="filterlist_row">
          <span>Elite Unique:</span>
          <button
            v-on:click="setFilter(filter)"
            class="fast-filter"
            v-for="filter in uniqEliteTags('Elite Unique ')"
            :key="filter"
          >{{ filter.replace('Elite Unique ', '') }}</button>
        </div>
      </div>
      <!-- FILTER CONTROLLER BLOCK END -->
    </div>
    <!-- ITEMS STYLED GRID -->
    <div id="items-wrapper" v-if="displayStyle=='grid'">
      <div v-for="item in dJson" v-bind:key="item.id" v-show="filteredJson(item)">
        <popper trigger="hover" :options="{placement: 'top'}">
          <div class="popper description" v-html="item.description"></div>
          <div slot="reference" class="pop-item">
            <div class="item-img">
              <img :src="('http://classic.battle.net' + item.img)" v-bind:alt="item.name" />
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
            <img :src="('http://classic.battle.net' + item.img)" v-bind:alt="item.name" />
          </div>
          <div class="name" v-html="item.name"></div>
          <div class="subname" v-html="item.nameType"></div>
        </div>
        <div v-html="item.description" class="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import axios from "axios";

export default {
  name: "UniqueItems",
  components: {
    popper: Popper
  },
  data: function() {
    return {
      dJson: [],
      uniqTags: [],
      filter: "",
      search: "",
      showFilter: false,
      displayStyle: "grid",
      classSpecific: [
        "Unique Amazon Items",
        "Unique Assassin Items",
        "Necromancer Unique Items",
        "Unique Barbarian Items",
        "Unique Sorceress Items",
        "Unique Druid Items",
        "Unique Paladin Items"
      ],
      justUniqueRow: [
        "Unique Rings",
        "Unique Amulets",
        "Unique Charms",
        "Unique Jewels",
        "Unique Circlets"
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
        let searchLower = this.search.toLowerCase();
        tempData =
          (tempData && item.name.toLowerCase().indexOf(searchLower) !== -1) ||
          item.nameType.toLowerCase().indexOf(searchLower) !== -1;
      }

      return tempData;
    },
    uniqEliteTags: function(inStr) {
      return this.uniqTags.filter(item => {
        return item.indexOf(inStr) !== -1;
      });
    }
  },
  watch: {},
  computed: {},
  created() {
    let axiosPrefix = "";
    if (process.env.NODE_ENV == "production") axiosPrefix = "/diablo2fresher";
    axios.get(axiosPrefix + "/json/q.json").then(response => {
      if (response && response.data) {
        this.qrJson = response.data;
        let qjson = this.qrJson;
        let filteredJson = qjson.filter(item => {
          if (item.tags.indexOf("unique") !== -1) {
            return true;
          }
        });
        this.dJson = filteredJson;

        let uniqTags = [];
        for (let item of qjson) {
          for (let tag of item.tags) {
            if (tag !== "unique" && uniqTags.indexOf(tag) == -1) {
              uniqTags.push(tag);
            }
          }
        }
        this.uniqTags = uniqTags;
      }
    });
  },
  mounted() {}
};
</script>

<style  lang="scss" scoped>
.popper{
  pointer-events: none;
}
.inline_view_controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.inline_filter_control {
  text-align: left;
}
.filterlist_row {
  max-width: 800px;
  margin: 10px auto;
}
.filterlist_wrapper {
  font-size: 13px;
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
      width: 100%;
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
  justify-content: center;
  margin-bottom: 1em;
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