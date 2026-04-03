<template>
  <div class="inline_view_controls">
    <div>
      <span>{{ label }}</span>
      <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" id="search_bar" />
    </div>
    <div v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Search'
    }
  },
  emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
.inline_view_controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    background: #1a1a1a;
    border: 1px solid #333;
    color: #fafafa;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #928a70;
    }
  }

  span {
    color: #928a70;
    font-weight: bold;
    margin-right: 8px;
  }
}
</style>
