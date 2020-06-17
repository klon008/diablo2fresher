<template>
  <div class="uniq_items">
    <h1>UNIQUE ITEMS</h1>
    <div id="filter">
      <div >
        <v-select class="filter-chooser" :options="uniqTags" autocomplete="on" v-model="filter">
        </v-select>
      </div>
    </div>

    <div id="items-wrapper">
    
    <div v-for="(item, index) in dJson" v-bind:key="index" v-show="( filter && item.tags.indexOf(filter)!==-1 )">
      <popper trigger="hover" :options="{placement: 'top'}">
        <div class="popper" v-html="item.description">
        </div>
        <div slot="reference" class="pop-item">
          <div class="item-img">
            <img :src="('http://classic.battle.net' + item.img)" v-bind:alt="item.name">
          </div>
          <div class="name" v-html="item.name"></div>
          <div class="subname" v-html="item.nameType"></div>
        </div>
      </popper>
    </div>
    </div>
  </div>
</template>

<script>


import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import qjson from '../assets/json/q.json';
  
export default {
  name: 'UniqueItems',
  components: {
    vSelect,
    'popper': Popper
  },
  data: function(){
    return {
      dJson: [],
      uniqTags: [],
      filter: '',
    }
  },
  mounted(){
    if (qjson){
       let filteredJson = qjson.filter((item)=>{
         if (item.tags.indexOf('unique') !== -1){
           return true;
         }
       });
       this.dJson = filteredJson

       let uniqTags = [];
       for (let item of qjson) {
         for (let tag of item.tags) {
           if (tag !=='unique' && uniqTags.indexOf(tag) == -1){
             uniqTags.push(tag);
           }
         }
       }
       this.uniqTags = uniqTags;
    }
  }
}
</script>
<style  lang="scss" scoped>
#items-wrapper{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  padding: 20px 0;
}
select{
  width: 150px
}
.filter-chooser .vs__search::placeholder,
.filter-chooser .vs__dropdown-toggle,
.filter-chooser .vs__dropdown-menu {
  background: #FFFFFF;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}
.item-img{
  background: #000000;
  border-radius: 5px;
  min-height: 116px;
  display: flex;
  justify-content: center;
  &>img{
    object-fit: contain;
  }
}
.popper{
  padding: 15px 5px;
  background: #000000eb;
  border: none;
  color: #FFFFFF;
  line-height: 1.35;
}
.pop-item{
  cursor: pointer;
}
</style>