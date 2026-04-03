<template>
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="2">{{ t('rune') }}</th>
          <th align="center">{{ t('toUpgrade') }}</th>
          <th>{{ t('socketedProperties') }}</th>
        </tr>
      </thead>
      <SkeletonRuneTable v-if="loading" :rowCount="10" />
      <template v-else>
        <tbody>
          <tr v-for="rune in runes" :key="rune.id">
            <td>
              <a target="_blank" :href="`runes/${rune.name}`" :title="rune.name">
                {{ rune.name }} - #{{ rune.number }}
              </a>
              <span v-if="rune.isHighRune" class="hight_rune">[HR]</span>
            </td>
            <td class="red">
              <a target="_blank" :href="`runes/${rune.name}`" class="image">
                <img :alt="`R-${rune.name.toLowerCase()}.gif`" :src="`${publicPath}${rune.image}`" :width="rune.width"
                  :height="rune.height" loading="lazy">
              </a>
            </td>
            <td align="center">
              <template v-if="rune.upgradeFrom">
                <a v-for="n in rune.upgradeFromCount" :key="n" target="_blank" :href="`runes/${rune.upgradeFrom}`"
                  class="image">
                  <img :alt="`R-${rune.upgradeFrom.toLowerCase()}.gif`"
                    :src="`${publicPath}img/runes/28px-${rune.upgradeFrom}_Rune.png`" loading="lazy">
                </a>
                <a v-if="rune.upgradeGem" target="_blank" :href="`runes/${rune.upgradeGem}`" class="image">
                  <img :alt="`${rune.upgradeGem.replace('_', '-').toLowerCase()}.gif`"
                    :src="`${publicPath}img/runes/${rune.upgradeGem.replace(' ', '_')}_(Diablo_II).gif`" loading="lazy">
                </a>
              </template>
              <template v-else>--</template>
            </td>
            <td>
              <template v-if="rune.properties.weapon">
                <b>{{ t('weapon') }}</b> {{ rune.properties.weapon }}<br>
              </template>
              <template v-if="rune.properties.armor">
                <b>{{ t('armorHelmShield') }}</b> {{ rune.properties.armor }}<br>
              </template>
              <template v-if="rune.properties.shield">
                <b>{{ t('shield') }}</b> {{ rune.properties.shield }}<br>
              </template>
              <template v-if="rune.properties.ilvl">
                <b>{{ t('ilvl') }}</b> {{ rune.properties.ilvl }}
              </template>
              <template v-if="rune.properties.clvl">
                <b>{{ t('clvlRequired') }}</b> {{ rune.properties.clvl }}
              </template>
            </td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import SkeletonRuneTable from '../components/SkeletonRuneTable.vue'
import { useLanguage } from '../composables/useLanguage'

export default {
  name: 'Runes',
  components: { SkeletonRuneTable },
  setup() {
    const { t } = useLanguage()
    return { t }
  },
  data() {
    return {
      loading: true,
      runes: [],
      publicPath: import.meta.env.BASE_URL
    }
  },
  created() {
    axios
      .get(`${import.meta.env.BASE_URL}json/runes.json`)
      .then(response => {
        if (response && response.data) {
          this.runes = response.data
        }
      })
      .catch(() => { })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;

  tr>td:nth-child(4) {
    text-align: left;
    padding: 8px;
  }

  td {
    background: #000000;
    border: 1px solid #202020;
  }
}

.hight_rune {
  color: #f36f1f;
}

.image {
  display: inline-block;
  margin: 2px;
}
</style>
