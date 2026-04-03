<template>
  <div class="lang-switcher">
    <button @click="setLanguage('en')" :class="{ active: language === 'en' }">
      EN
    </button>
    <span class="divider">|</span>
    <button @click="setLanguage('ru')" :class="{ active: language === 'ru' }">
      RU
    </button>
  </div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'

export default {
  name: 'LangSwitcher',
  setup() {
    const { language, setLanguage } = useLanguage()

    return {
      language,
      setLanguage
    }
  }
}
</script>

<style scoped lang="scss">
.lang-switcher {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;

  button {
    background: none;
    border: none;
    color: #928a70;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 8px;
    transition: color 0.2s;

    &:hover {
      color: #beb9ab;
    }

    &.active {
      color: #FEAF00;
    }
  }

  .divider {
    color: #928a70;
  }
}
</style>
