<template>
  <div id="items-wrapper" :class="{ 'row-styled': displayMode === 'row' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ItemGrid',
  props: {
    displayMode: {
      type: String,
      default: 'grid',
      validator: (value) => ['grid', 'row'].includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
#items-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  padding: 20px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &.row-styled {
    grid-template-columns: repeat(1, 1fr);

    &>div {
      display: flex;
      align-items: center;
      background: #000000;
      border-radius: 5px;
      padding-top: 25px;
      padding-bottom: 25px;
      gap: 20px;

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .pop-item {
      cursor: pointer;
      width: 350px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .description {
      flex: 1;
      text-align: left;

      @media (max-width: 768px) {
        text-align: center;
        width: 100%;
      }
    }

    .partial {
      flex: 1;
      text-align: left;

      @media (max-width: 768px) {
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>
