<template>
  <div class="sk-craft">
    <template v-for="g in groupCount" :key="g">
      <div class="sk-craft__row sk-craft__row--group">
        <div class="sk-craft__cell sk-craft__cell--span">
          <SkeletonPulse height="18px" width="160px" />
        </div>
        <div class="sk-craft__cell sk-craft__cell--empty" />
        <div class="sk-craft__cell sk-craft__cell--empty" />
      </div>
      <div
        v-for="r in rowsPerGroup"
        :key="`${g}-${r}`"
        class="sk-craft__row"
      >
        <div class="sk-craft__cell">
          <SkeletonPulse height="72px" width="72px" radius="4px" class="sk-craft__thumb" />
          <SkeletonPulse height="12px" width="100%" />
          <SkeletonPulse height="12px" width="80%" />
        </div>
        <div class="sk-craft__cell">
          <SkeletonPulse height="72px" width="72px" radius="4px" class="sk-craft__thumb" />
          <SkeletonPulse height="14px" width="65%" />
          <SkeletonPulse height="12px" width="95%" />
          <SkeletonPulse height="12px" width="70%" />
        </div>
        <div class="sk-craft__cell">
          <SkeletonPulse height="12px" width="92%" />
          <SkeletonPulse height="12px" width="55%" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import SkeletonPulse from './SkeletonPulse.vue'

export default {
  name: 'SkeletonCraftingTable',
  components: { SkeletonPulse },
  props: {
    groupCount: { type: Number, default: 3 },
    rowsPerGroup: { type: Number, default: 2 },
  },
}
</script>

<style scoped>
.sk-craft {
  display: table-row-group;
}

.sk-craft__row {
  display: table-row;
}

.sk-craft__cell {
  display: table-cell;
  border: 1px solid #202020;
  padding: 10px;
  background: #000000;
  vertical-align: top;
}

.sk-craft__cell > * + * {
  margin-top: 8px;
}

.sk-craft__cell--span {
  font-weight: bold;
  padding: 10px;
}

.sk-craft__cell--empty {
  border-left: none;
  border-right: none;
  min-width: 0;
  padding: 0;
}

.sk-craft__row--group .sk-craft__cell--span {
  border-right: none;
}

.sk-craft__thumb {
  display: block;
  margin: 0 auto 8px;
}
</style>
