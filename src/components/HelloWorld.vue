<template>
  <div class="column-content">
    <ul>
      <li><router-link to="/uniq_items">Unique Items</router-link></li>
      <li><router-link to="/rune_words">Runewors</router-link></li>
      <li><router-link to="/runes">All Runes</router-link></li>
      <li><router-link to="/sets">Set Items</router-link></li>
      <li><router-link to="/crafting">Crafting</router-link></li>
    </ul>
    <router-view></router-view>
    <BackToTop text="Back to top"></BackToTop>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding-right: 1em;
  border-right: 1px solid #928a70;
  &:last-child{
    border-right: none;
  }
}
a {
  font-family: ProximaNova,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: #928a70;
  
  
  
  &:hover{
    color: #beb9ab;
  }
}
.column-content{
  background-color: rgba(67, 74, 74, 0.87);
  width:100%;
  max-width: 1100px;
  margin: auto;
  box-shadow: 0 0 15px #000000;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 15px;
}
</style>
