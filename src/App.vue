<template>
  <div id="app">
    <canvas 
      ref="canvas" 
      id="canvas" 
    />
    <div class="content">
      <img 
        alt="Vue logo" 
        src="./assets/aura-set-griswold.png"
      >
      <HelloWorld 
        msg="Diablo 2 FResHER" 
      />      
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
</style>
