<template>
  <VDropdown v-if="tooltip" :triggers="['hover']" :placement="placement" no-auto-focus>
    <div class="pop-item">
      <div class="item-img">
        <img :src="imageSrc" :alt="name" loading="lazy" />
      </div>
      <div class="name" v-html="name"></div>
      <div v-if="subname" class="subname" v-html="subname"></div>
    </div>
    <template #popper>
      <div class="popper" v-html="tooltip"></div>
    </template>
  </VDropdown>
  <div v-else class="pop-item">
    <div class="item-img">
      <img :src="imageSrc" :alt="name" />
    </div>
    <div class="name" v-html="name"></div>
    <div v-if="subname" class="subname" v-html="subname"></div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    name: {
      type: String,
      required: true
    },
    subname: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-img {
  background: #000000;
  border-radius: 5px;
  min-height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100px;
  }
}

.name {
  font-weight: 600;
  text-align: center;
}

.subname {
  font-size: 0.9em;
  color: #888;
  text-align: center;
}

.popper {
  padding: 15px;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid #333;
  color: #ffffff;
  line-height: 1.35;
  max-width: 300px;
  pointer-events: none;
}
</style>
