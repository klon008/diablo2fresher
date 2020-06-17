<template>
  <div class="column-content">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/uniq_items">Уникальные предметы</router-link></li>
      <li><router-link to="/rune_words">Рунные слова</router-link></li>
      <li><router-link to="/runes">Все Руны</router-link></li>
    </ul>
    <router-view></router-view>
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
}
a {
  font-family: ProximaNova,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: #4297b9;
  &:hover{
    color: #57b7dd;
  }
}
.column-content{
  background-color: #690c24DF;
  width:100%;
  max-width: 1100px;
  margin: auto;
  box-shadow: 0 0 15px #000000;
  padding: 15px;
  border-radius: 4px;
}
</style>
