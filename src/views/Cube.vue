<template>
  <div class="cube-content">
    <h3 class="h3-headline"><span class="headline" id="Recipes">{{ t('recipes') }}</span></h3>
    <div style="clear: both; margin: 0; padding: 0"></div>
    <p>
      {{ cubeContent?.note }}
      {{ cubeContent?.ilvlNote }}
    </p>

    <template v-if="cubeContent?.recipes">
      <div v-for="(recipe, index) in cubeContent.recipes" :key="index" class="recipe-block">
        <ul>
          <li>
            <b>{{ recipe.formula }}</b>
          </li>
        </ul>
        <dl v-if="recipe.description">
          <dd>{{ recipe.description }}</dd>
        </dl>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import { useLanguage } from '../composables/useLanguage'

export default {
  setup() {
    const { language, t } = useLanguage()
    const cubeContent = ref(null)

    const loadContent = (lang) => {
      axios
        .get(`${import.meta.env.BASE_URL}json/cube_${lang}.json`)
        .then(response => {
          if (response && response.data) {
            cubeContent.value = response.data
          }
        })
        .catch(() => {
          // Fallback to English if translation not found
          if (lang !== 'en') {
            loadContent('en')
          }
        })
    }

    onMounted(() => {
      loadContent(language.value)
    })

    watch(language, (newLang) => {
      loadContent(newLang)
    })

    return {
      cubeContent,
      t
    }
  }
}
</script>

<style lang="scss" scoped>
.cube-content {
  text-align: left;
}

.h3-headline {
  text-align: center;
}

.recipe-block {
  margin-bottom: 1.5em;

  ul {
    margin: 0;
    padding-left: 0;

    li {
      list-style: none;
      margin-bottom: 0.25em;
    }
  }

  dl {
    margin: 0.25em 0 1em 0;

    dd {
      margin-left: 1.5em;
      color: #aaa;
      font-size: 0.9em;
      line-height: 1.4;
    }
  }
}
</style>