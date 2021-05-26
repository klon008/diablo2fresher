<template>
    <a @click="scrollTop" v-show="visible" class="bottom-right">
        <slot></slot>
    </a>
</template>

<script>
export default {
  name: "ScrollToTopComponent",
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      console.log('window.scrollY');
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
      console.log('window.scrollY');
    window.addEventListener('scroll', (e)=>{
      console.log(window);
      this.visible = window.scrollY > 150
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>