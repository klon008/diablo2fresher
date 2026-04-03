<template>
  <div class="skeleton-pulse" :style="inlineStyle" />
</template>

<script>
export default {
  name: 'SkeletonPulse',
  props: {
    height: { type: String, default: '1em' },
    width: { type: String, default: '100%' },
    radius: { type: String, default: '4px' },
  },
  computed: {
    inlineStyle() {
      return {
        height: this.height,
        width: this.width,
        borderRadius: this.radius,
      }
    },
  },
}
</script>

<style scoped>
.skeleton-pulse {
  background: linear-gradient(90deg,
      #1a1a1a 0%,
      #2d2d2d 45%,
      #1a1a1a 100%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.15s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
}
</style>
