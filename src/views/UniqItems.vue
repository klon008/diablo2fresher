<template>
  <div class="uniq_items">
    <h2>{{ t('uniqueItemsTitle') }}</h2>
    <div id="filter">
      <!-- SEARCH BLOCK START -->
      <div class="inline_view_controls">
        <SearchBar v-model="search" :label="t('searchBy')" name="search" id="search-input">
          <template #actions>
            {{ t('displayAs') }}
            <button class="fast-filter" v-on:click="displayStyle = 'row'">{{ t('row') }}</button>
            <button class="fast-filter" v-on:click="displayStyle = 'grid'">{{ t('grid') }}</button>
          </template>
        </SearchBar>
      </div>
      <!-- SEARCH BLOCK END -->
      <!-- FILTER CONTROLLER SHOW/HIDE BLOCK START -->
      <div class="inline_filter_control">
        <button class="fast-filter" v-on:click="showFilter = !showFilter">
          <template v-if="!showFilter">{{ t('showFilter') }}</template>
          <template v-else>{{ t('hideFilter') }}</template>
        </button>
        <button class="fast-filter" v-if="filter !== ''" v-on:click="filter = ''">{{ t('clearFilter') }}</button>
      </div>
      <!-- FILTER CONTROLLER SHOW/HIDE BLOCK END -->
      <!-- FILTER CONTROLLER BLOCK START -->
      <div class="filterlist_wrapper" v-show="showFilter">
        <div class="filterlist_row">
          <button v-on:click="setFilter(wfilter)" class="fast-filter" v-for="wfilter of justUniqueRow" :key="wfilter"
            v-bind:class="[wfilter == filter ? 'active' : '']">{{ wfilter.match(/[^Unique]\S+/g)[0] }}</button>
        </div>
        <div class="filterlist_row">
          <span>Class-Specific Items :</span>
          <button v-on:click="setFilter(wfilter)" class="fast-filter" v-for="wfilter in classSpecific" :key="wfilter"
            v-bind:class="[wfilter == filter ? 'active' : '']">{{ wfilter.match(/[^Unique]\S+[^Items]/g)[0] }}</button>
        </div>
        <div class="filterlist_row">
          <span>Normal Unique :</span>
          <button v-on:click="setFilter(wfilter)" class="fast-filter" v-for="wfilter in uniqEliteTags('Normal Unique ')"
            :key="wfilter" v-bind:class="[wfilter == filter ? 'active' : '']">{{ wfilter.replace('Normal Unique ', '')
            }}</button>
        </div>
        <div class="filterlist_row">
          <span>Exceptional Unique:</span>
          <button v-on:click="setFilter(wfilter)" class="fast-filter"
            v-for="wfilter in uniqEliteTags('Exceptional Unique ')" :key="wfilter"
            v-bind:class="[wfilter == filter ? 'active' : '']">{{ wfilter.replace('Exceptional Unique ', '')
            }}</button>
        </div>
        <div class="filterlist_row">
          <span>Elite Unique:</span>
          <button v-on:click="setFilter(wfilter)" class="fast-filter" v-for="wfilter in uniqEliteTags('Elite Unique ')"
            :key="wfilter" v-bind:class="[wfilter == filter ? 'active' : '']">{{ wfilter.replace('Elite Unique ', '')
            }}</button>
        </div>
      </div>
      <!-- FILTER CONTROLLER BLOCK END -->
    </div>
    <!-- ITEMS -->
    <div v-if="loading" class="items-skeleton-wrap">
      <SkeletonItemGrid />
    </div>
    <template v-else>
      <div id="items-wrapper" v-if="displayStyle == 'grid'">
        <div v-for="item in dJson" v-bind:key="item.id" v-show="filteredJson(item)">
          <VDropdown :triggers="['hover']" placement="top">
            <div class="pop-item">
              <div class="item-img">
                <img :src="(publicPath + item.img)" v-bind:alt="item.name" loading="lazy" />
              </div>
              <div class="name" v-html="item.name"></div>
              <div class="subname" v-html="item.nameType"></div>
            </div>
            <template #popper>
              <div class="popper description" v-html="item.description"></div>
            </template>
          </VDropdown>
        </div>
      </div>
      <div id="items-wrapper" class="row-styled" v-else-if="displayStyle == 'row'">
        <div v-for="item in dJson" v-bind:key="item.id" v-show="filteredJson(item)">
          <div class="pop-item">
            <div class="item-img">
              <img :src="(publicPath + item.img)" v-bind:alt="item.name" loading="lazy" />
            </div>
            <div class="name" v-html="item.name"></div>
            <div class="subname" v-html="item.nameType"></div>
          </div>
          <div v-html="item.description" class="description"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import SkeletonItemGrid from "../components/SkeletonItemGrid.vue";
import SearchBar from "../components/SearchBar.vue";
import { useLanguage } from "../composables/useLanguage";

export default {
  name: "UniqueItems",
  components: { SkeletonItemGrid, SearchBar },
  setup() {
    const { t } = useLanguage()
    return { t }
  },
  data: function () {
    return {
      loading: true,
      publicPath: import.meta.env.BASE_URL,
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
    setFilter: function (inVal) {
      if (inVal) {
        this.filter = inVal;
      }
    },
    filteredJson: function (item) {
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
    uniqEliteTags: function (inStr) {
      return this.uniqTags.filter(item => {
        return item.indexOf(inStr) !== -1;
      });
    }
  },
  watch: {},
  computed: {},
  created() {
    axios
      .get(`${import.meta.env.BASE_URL}json/q.json`)
      .then(response => {
        if (response && response.data) {
          const qjson = response.data;
          let filteredJson = qjson.filter(item => {
            if (item.tags.indexOf("unique") !== -1) {
              return true;
            }
          });
          filteredJson.map(item => {
            if (item.img && item.img[0] && item.img[0] == "/") {
              item.img = item.img.substring(1);
            }
            return item;
          })
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
      })
      .catch(() => { })
      .finally(() => {
        this.loading = false;
      });
  },
  mounted() { }
};
</script>

<style lang="scss" scoped>
.popper {
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

.items-skeleton-wrap {
  width: 100%;
  display: block;
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

    &>div {
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

.row-styled {
  .item-img {
    margin-bottom: 0;
  }
}

.item-img {
  background: #000000;
  border-radius: 5px;
  min-height: 116px;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  &>img {
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

  &>span {
    display: block;
  }
}
</style>