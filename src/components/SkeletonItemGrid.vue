<template>
  <div class="skeleton-item-grid">
    <div v-for="n in count" :key="n" class="skeleton-card">
      <SkeletonPulse class="skeleton-card__img" height="116px" width="100%" radius="5px" />
      <SkeletonPulse class="skeleton-card__line" height="14px" width="85%" />
      <SkeletonPulse class="skeleton-card__line" height="12px" width="60%" />
    </div>
  </div>
</template>

<script>
import SkeletonPulse from './SkeletonPulse.vue'

export default {
  name: 'SkeletonItemGrid',
  components: { SkeletonPulse },
  props: {
    count: { type: Number, default: 15 },
  },
}
</script>

<style scoped>
.skeleton-item-grid {
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
  padding: 20px 0;
}

.skeleton-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 0;
  width: 100%;
}

.skeleton-card__img {
  width: 100%;
}

.skeleton-card__line {
  align-self: stretch;
}
</style>
