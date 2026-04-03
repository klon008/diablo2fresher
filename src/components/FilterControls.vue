<template>
  <div class="filter-controls">
    <!-- Поиск -->
    <SearchBar v-if="showSearch" :label="searchLabel" v-model="searchValue" />

    <!-- Кнопки переключения вида -->
    <div v-if="displayModes" class="display-modes">
      <span>display as:</span>
      <button v-for="mode in displayModes" :key="mode.value" class="fast-filter"
        :class="{ active: currentDisplayMode === mode.value }" @click="$emit('update:displayMode', mode.value)">
        {{ mode.label }}
      </button>
    </div>

    <!-- Кнопки фильтров -->
    <div class="inline_filter_control">
      <button class="fast-filter" @click="toggleFilter">
        {{ showFilter ? 'hide filter' : 'show filter' }}
      </button>
      <button v-if="hasActiveFilter" class="fast-filter" @click="clearFilter">
        clear filter
      </button>
    </div>

    <!-- Список фильтров -->
    <div v-show="showFilter" class="filterlist_wrapper">
      <div v-for="(group, groupIndex) in filterGroups" :key="groupIndex" class="filterlist_row">
        <span v-if="group.label">{{ group.label }}</span>
        <button v-for="item in group.items" :key="item.value" class="fast-filter"
          :class="{ active: currentFilter === item.value }" @click="selectFilter(item.value)">
          {{ item.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'FilterControls',
  components: { SearchBar },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    filter: {
      type: String,
      default: ''
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    searchLabel: {
      type: String,
      default: 'Search by'
    },
    displayModes: {
      type: Array,
      default: null
    },
    displayMode: {
      type: String,
      default: 'grid'
    },
    filterGroups: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue', 'update:filter', 'update:displayMode'],
  data() {
    return {
      showFilter: false
    }
  },
  computed: {
    searchValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    },
    currentFilter: {
      get() {
        return this.filter
      },
      set(val) {
        this.$emit('update:filter', val)
      }
    },
    currentDisplayMode: {
      get() {
        return this.displayMode
      },
      set(val) {
        this.$emit('update:displayMode', val)
      }
    },
    hasActiveFilter() {
      return this.filter !== ''
    }
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
    clearFilter() {
      this.currentFilter = ''
    },
    selectFilter(value) {
      this.currentFilter = value
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-controls {
  text-align: left;
}

.display-modes {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: #928a70;
    font-weight: bold;
  }
}

.inline_filter_control {
  margin-top: 10px;
}
</style>
