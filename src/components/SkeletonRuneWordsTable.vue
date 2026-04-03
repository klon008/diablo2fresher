<template>
  <div class="skeleton-rw-table">
    <div v-for="row in rowCount" :key="row" class="skeleton-rw-row">
      <div class="skeleton-rw-cell skeleton-rw-cell--narrow">
        <SkeletonPulse height="14px" width="40%" />
      </div>
      <div class="skeleton-rw-cell">
        <SkeletonPulse height="14px" width="70%" />
      </div>
      <div class="skeleton-rw-cell skeleton-rw-cell--wide">
        <SkeletonPulse height="14px" width="90%" />
        <SkeletonPulse height="14px" width="75%" />
      </div>
      <div class="skeleton-rw-cell">
        <SkeletonPulse height="14px" width="55%" />
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonPulse from './SkeletonPulse.vue'

export default {
  name: 'SkeletonRuneWordsTable',
  components: { SkeletonPulse },
  props: {
    rowCount: { type: Number, default: 10 },
  },
}
</script>

<style scoped>
.skeleton-rw-table {
  width: 100%;
  display: table-row-group;
}

.skeleton-rw-row {
  display: table-row;
}

.skeleton-rw-cell {
  display: table-cell;
  text-align: left;
  padding: 1em 1em 1em 1em;
  background: #000000;
  border: 1px solid #202020;
  vertical-align: top;
}

.skeleton-rw-cell--narrow {
  width: 3em;
}

.skeleton-rw-cell--wide {
  min-width: 35%;
}

.skeleton-rw-cell > * + * {
  margin-top: 8px;
}
</style>
