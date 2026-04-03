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
      <LangSwitcher class="lang-position" />
      <NavigationMenu 
        msg="Diablo 2 [FRESHER]" 
      />
      
      <footer>Copyright © 2020. All Rights Reserved | Created by klon_008</footer>
      <a href="https://www.tbank.ru/cf/7wAjQApstO8" referrerpolicy="origin" class="by_me_coffe" target="_blank"><img src="./assets/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
      <ScrollToTop />
    </div>
    

  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import LangSwitcher from './components/LangSwitcher.vue'
import { createStars, initCanvas, animate } from './utils/Star.js'

export default {
  name: 'App',
  components: {
    NavigationMenu,
    ScrollToTop,
    LangSwitcher,
  },
  mounted(){
    const canvas = this.$refs.canvas
    
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d")

      // Инициализация canvas
      const handleResize = () => {
        initCanvas(ctx)
      }
      
      window.addEventListener('resize', handleResize)
      handleResize()
      
      // Создание звезд
      const stars = createStars(ctx.canvas, 60)
      
      // Запуск анимации
      animate(ctx, stars)
    }
  }
}
</script>

<style lang="scss">
footer {
  margin: 2em;
}

.tyrael {
  display: block;
  margin: -40px auto 0;
}

.logo {
  display: block;
  margin: -70px auto 15px;
}

.lang-position {
  position: absolute;
  right: 75px;
  top: 0%;
}

#canvas {
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
  color: #fafafa;
  height: 100vh;
  width: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  overflow: auto;
  background-image: url('./assets/bgi.png');
}

a {
  color: #FEAF00;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &::visited {
    color: #FEAF00;
  }
}
</style>
