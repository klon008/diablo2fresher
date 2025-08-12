<template>
  <div id="app">
    
    <canvas 
      ref="canvas" 
      id="canvas" 
    />
    <div class="content">
      
      <img 
        class="tyrael"
        alt="[fresher] tyrael" 
        src="./assets/NXzL-unscreen.gif"
      >
      <img 
        class="logo"
        alt="[fresher] logo" 
        src="./assets/DiabloIIf.png"
      >
      <HelloWorld 
        msg="Diablo 2 [FRESHER]" 
      />
      
      <footer>Copyright © 2020. All Rights Reserved | Created by klon_008</footer>
      <a href="https://www.tbank.ru/cf/7wAjQApstO8" referrerpolicy="origin" class="by_me_coffe" target="_blank"><img src="./assets/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
      <v-scroll-to-top></v-scroll-to-top>
    </div>
    

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  
  class Star {
    constructor(x,y, speed = 100){
      this.x = x;
      this.y = y;
      this.speed = speed;
    }
  }

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    mounted(){
      var canvas = this.$refs.canvas;
      
      if (canvas.getContext) {

        let AllStars = [];

        const redraw = () => {

          ctx.fillStyle = "rgb(0,0,0)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          for (let star of AllStars){
            star.x = star.x - ( star.speed );
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fillRect(star.x,star.y,1,1);  
            if (star.x <= 0){ star.x = canvas.width }
          }
        requestAnimationFrame(redraw)
      }


      var ctx = canvas.getContext("2d");
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let speed of [0.001, 0.0022, 0.0045]){
        for (let index = 0; index < 20; index++) {

          ctx.fillStyle = "rgb(255,255,255)";
          
          let x = Math.random() * (canvas.width - 0) + 0;
          let y = Math.random() * (canvas.height - 0) + 0;
          ctx.fillRect(x,y,1,1);  
          let s = new Star(x,y, speed);
          AllStars.push(s);
          requestAnimationFrame(redraw)
        }
      }

      


    }
  }
}
</script>

<style lang="scss">
footer{
  margin: 2em;
}
.tyrael{
  display:block;
  margin: -40px auto 0;
}
.logo{
  display:block;
  margin: -70px auto 15px;
}
#canvas{
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
#app .content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;height: 100vh;
  width: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  overflow: auto;
  
  //background: #000000 url('./assets/bgi.png') 50% 50% no-repeat ;
  background-image: url('./assets/bgi.png');
}
a{
  color: #FEAF00;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
  &::visited{
    color: #FEAF00;
  }
}
.vue-scroll-button {
  background-color: #222; 
  color: #fff;
}

.vue-scroll-button:hover {
  background-color: #333; 
}


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
  &.active{
      color: #e9630a !important;
  }
}

</style>
