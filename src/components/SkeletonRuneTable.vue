<template>
  <tbody>
    <tr v-for="row in rowCount" :key="row">
      <td>
        <SkeletonPulse height="14px" width="60%" />
      </td>
      <td>
        <SkeletonPulse height="30px" width="30px" />
      </td>
      <td>
        <SkeletonPulse height="20px" width="80%" />
      </td>
      <td>
        <SkeletonPulse height="14px" width="90%" />
        <SkeletonPulse height="14px" width="70%" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import SkeletonPulse from './SkeletonPulse.vue'

export default {
  name: 'SkeletonRuneTable',
  components: { SkeletonPulse },
  props: {
    rowCount: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss" scoped>
td {
  text-align: left;
  padding: 1em;
  background: #000000;
  border: 1px solid #202020;
  vertical-align: middle;

  &:first-child {
    width: 15%;
  }

  &:nth-child(2) {
    width: 5%;
    text-align: center;
  }

  &:nth-child(3) {
    width: 15%;
    text-align: center;
  }

  &>*+* {
    margin-top: 8px;
  }
}
</style>
