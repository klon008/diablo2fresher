<template>
   <div class="RuneWords">
      <h1>Runewords</h1>
      <div id="filter">
         <div class="inline_view_controls">
            <div>
               <span>Search: </span> <input type="text" v-model="filter" />
            </div>
         </div>
         <div>
            <button
               class="fast-filter"
               v-on:click="quickFilterEnabled = !quickFilterEnabled"
               v-bind:class="{ active: quickFilterEnabled }"
            >
               Quick filter
            </button>
            <button
               class="fast-filter"
               v-on:click="quickFilterRunesEnabled = !quickFilterRunesEnabled"
               v-bind:class="{ active: quickFilterRunesEnabled }"
            >
               Rune filter
            </button>
         </div>
         <div v-if="quickFilterEnabled">
            <div>
               <button class="fast-filter" v-on:click="quickFilter = ''">
                  All items
               </button>
            </div>
            <div>
               <button
                  class="fast-filter"
                  v-on:click="quickFilter = 'Armor'"
                  v-bind:class="[quickFilter == 'Armor' ? 'active' : '']"
               >
                  Armor
               </button>
            </div>
            <div>
               <button
                  class="fast-filter"
                  v-on:click="quickFilter = 'Headgear'"
                  v-bind:class="[quickFilter == 'Headgear' ? 'active' : '']"
               >
                  Headgear
               </button>
               <button
                  class="fast-filter"
                  v-on:click="quickFilter = 'Headgear (all types)'"
                  v-bind:class="[
                     quickFilter == 'Headgear (all types)' ? 'active' : '',
                  ]"
               >
                  Headgear (all types)
               </button>
            </div>
            <div>
               <button
                  class="fast-filter"
                  v-on:click="quickFilter = 'Shields'"
                  v-bind:class="[quickFilter == 'Shields' ? 'active' : '']"
               >
                  Shields
               </button>
            </div>
            <div>
               <button
                  class="fast-filter"
                  v-on:click="quickFilter = 'All Weapons'"
                  v-bind:class="[quickFilter == 'All Weapons' ? 'active' : '']"
               >
                  All Weapons
               </button>
            </div>
            <button
               class="fast-filter"
               v-on:click="quickFilter = 'Weapons'"
               v-bind:class="[
                  quickFilter == 'Weapons' || quickFilter == 'All Weapons'
                     ? 'active'
                     : '',
               ]"
            >
               Weapons
            </button>
            <button
               class="fast-filter"
               v-for="item in quickFilterVariants"
               v-bind:key="item"
               v-on:click="quickFilter = item"
               v-bind:class="[
                  quickFilter == item || quickFilter == 'All Weapons'
                     ? 'active'
                     : '',
               ]"
            >
               {{ item }}
            </button>
         </div>
         <div v-if="quickFilterRunesEnabled">
            <div>
               <button
                  class="fast-filter"
                  v-on:click="quickFilterRuneSelected = ''"
               >
                  All Runes
               </button>
               <button
                  class="fast-filter"
                  v-for="item in quickRunes"
                  v-bind:key="item"
                  v-on:click="quickFilterRuneSelected = item"
                  v-bind:class="[
                     quickFilterRuneSelected == item ? 'active' : '',
                  ]"
               >
                  {{ item }}
               </button>
            </div>
         </div>
      </div>

      <div class="items">
         <div class="items_header">
            <div class="items_header_h">№</div>
            <div class="items_header_h">Runeword</div>
            <div class="items_header_h">Stats</div>
            <div class="items_header_h">Comments</div>
         </div>
         <div v-for="(item, index) in filteredJson" v-bind:key="index">
            <div class="index">{{ index + 1 }}</div>
            <div class="name" v-html="item.name"></div>
            <div class="stats" v-html="item.description"></div>
            <div class="comments" v-html="item.Comments"></div>
         </div>
      </div>
   </div>
</template>


<script>
import axios from "axios";
export default {
   name: "RuneWords",

   data: function () {
      return {
         qrJson: [],
         filter: "",
         qickFilers: [],
         quickFilter: "",
         quickFilterEnabled: false,
         quickFilterRunesEnabled: false,
         quickFilterRuneSelected: "",
         quickRunes: [
            "El",
            "Eld",
            "Tir",
            "Nef",
            "Eth",
            "Ith",
            "Tal",
            "Ral",
            "Ort",
            "Thul",
            "Amn",
            "Sol",
            "Shael",
            "Dol",
            "Hel",
            "Io",
            "Lum",
            "Ko",
            "Fal",
            "Lem",
            "Pul",
            "Um",
            "Mal",
            "Ist",
            "Gul",
            "Vex",
            "Ohm",
            "Lo",
            "Sur",
            "Ber",
            "Jah",
            "Cham",
            "Zod",
         ],
      };
   },
   computed: {
      filteredJson: function () {
         return this.qrJson.filter((item) => {
            var quickFilter = this.quickFilter;
            if (quickFilter && quickFilter.length > 0) {
               if (quickFilter == "All Weapons") {
                  var arrAyAllWeapons = [
                     "Weapons",
                     ...this.quickFilterVariants,
                  ];
                  var intersection = item.item_slot.filter((x) =>
                     arrAyAllWeapons.includes(x)
                  );
                  if (intersection.length == 0) {
                     return false;
                  }
               } else {
                  if (item.item_slot && Array.isArray(item.item_slot)) {
                     if (item.item_slot.indexOf(quickFilter) == -1) {
                        return false;
                     }
                  }
               }
            }
            var quickFilterRuneSelected = this.quickFilterRuneSelected;
            if (
               quickFilterRuneSelected &&
               quickFilterRuneSelected.length > 0 &&
               item.runes &&
               Array.isArray(item.runes)
            ) {

               if (item.runes.indexOf(quickFilterRuneSelected) == -1) {
                  return false;
               }
            }
            if (
               this.filter &&
               item.name.toLowerCase().indexOf(this.filter.toLowerCase()) == -1
            ) {
               return false;
            }

            return true;
         });
      },
      quickFilterVariants: function () {
         var setIterator = new Set();
         var presetetedVariants = [
            "Armor",
            "Headgear",
            "Headgear (all types)",
            "Shields",
            "Weapons",
         ];
         this.qrJson.forEach((item, index) => {
            if (item.item_slot && Array.isArray(item.item_slot)) {
               for (var item_slot_iterator of item.item_slot) {
                  if (presetetedVariants.indexOf(item_slot_iterator) == -1)
                     setIterator.add(item_slot_iterator);
               }
            }

            return this.qrJson.indexOf(item) !== index;
         });
         return setIterator;
      },
   },
   methods: {
      checkFilter: function (item) {
         if (item.name.indexOf(this.filter) == -1) {
            return false;
         }
         return true;
      },
   },
   mounted() {},
   created() {
      let axiosPrefix = "";
      if (process.env.NODE_ENV == "production") axiosPrefix = "/diablo2fresher";
      axios.get(axiosPrefix + "/json/qr.json").then((response) => {
         if (response && response.data) {
            this.qrJson = response.data;
         }
      });
   },
};
</script>

<style lang="scss" scoped>
#filter {
   text-align: left;
}
.items_header {
   display: table-header-group;
   & > .items_header_h {
      background: transparent;
      border: none;
      vertical-align: center;
      text-align: center;
   }
}
.items {
   width: 100%;
   display: table;
   margin-top: 1em;
   margin-bottom: 2em;
   & > div {
      display: table-row;
      & > div {
         text-align: left;
         padding-top: 1em;
         padding-left: 1em;
         padding-right: 1em;
         display: table-cell;
         background: #000000;
         border: 1px solid #202020;
      }
   }
}
</style>