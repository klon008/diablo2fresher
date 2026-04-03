<template>
  <button v-show="visible" type="button" class="scroll-to-top" aria-label="Scroll to top" @click="scrollTop">
    ↑
  </button>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    const root = document.getElementById('app')
    const target = root?.querySelector('.content') ?? window
    this._onScroll = () => {
      const y = target === window ? window.scrollY : target.scrollTop
      this.visible = y > 320
    }
    target.addEventListener('scroll', this._onScroll, { passive: true })
    this._onScroll()
  },
  beforeUnmount() {
    const root = document.getElementById('app')
    const target = root?.querySelector('.content') ?? window
    target.removeEventListener('scroll', this._onScroll)
  },
  methods: {
    scrollTop() {
      const root = document.getElementById('app')
      const target = root?.querySelector('.content') ?? window
      if (target === window) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        target.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 36px;
  bottom: 16px;
  z-index: 1000;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}

.scroll-to-top:hover {
  background-color: #333;
}
</style>
