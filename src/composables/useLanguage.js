import { ref, computed } from 'vue'

const currentLanguage = ref(localStorage.getItem('language') || 'en')

const translations = {
  en: {
    // Navigation
    uniqueItems: 'Unique Items',
    runeWords: 'Runewors',
    allRunes: 'All Runes',
    setItems: 'Set Items',
    crafting: 'Crafting',
    whiteBases: 'White Bases',
    cube: 'Cube',
    
    // Common UI
    searchBy: 'Search by:',
    displayAs: 'display as:',
    row: 'row',
    grid: 'grid',
    showFilter: 'show filter',
    hideFilter: 'hide filter',
    clearFilter: 'clear filter',
    
    // Page titles
    uniqueItemsTitle: 'UNIQUE ITEMS',
    runeWordsTitle: 'RUNE WORDS',
    runesTitle: 'RUNES',
    setItemsTitle: 'SET ITEMS',
    craftingTitle: 'CRAFTING',
    basesTitle: 'WHITE BASES',
    cubeTitle: 'CUBE RECIPES',
    
    // Filter categories
    classSpecificItems: 'Class-Specific Items',
    normalUnique: 'Normal Unique',
    exceptionalUnique: 'Exceptional Unique',
    eliteUnique: 'Elite Unique',
    
    // Additional UI
    loading: 'Loading...',
    buyMeCoffee: 'Buy Me A Coffee',
    
    // RuneWords
    runeFilter: 'Rune filter',
    allItems: 'All items',
    
    // Runes
    rune: 'Rune',
    toUpgrade: 'to Upgrade:',
    socketedProperties: 'Socketed Properties',
    weapon: 'Weapon:',
    armorHelmShield: 'Armor/Helm/Shield:',
    shield: 'Shield:',
    ilvl: 'Ilvl:',
    clvlRequired: 'Clvl Required:',
    highRune: '[HR]',
    
    // Set Items
    setItemsTitle: 'SET ITEMS',
    classSpecificItemsLabel: 'Class-Specific Items :',
    normalSets: 'Normal Sets :',
    lodSets: 'LOD Sets :',
    
    // Crafting
    craftingTitle: 'CRAFTING',
    faq: 'FAQ',
    allRecipes: 'All Recipes',
    bloodRecipes: 'Blood Recipes',
    casterRecipes: 'Caster Recipes',
    hitpowerRecipes: 'Hitpower Recipes',
    safetyRecipes: 'Safety Recipes',
    ingredients: 'Ingredients',
    craftedItem: 'Crafted Item',
    comments: 'Comments',
    
    // Bases
    itemBases: 'ITEM BASES',
    armors: 'Armors :',
    weapons: 'Weapons :',
    classSpecificArmor: 'Class-specific Armor :',
    classSpecificWeapons: 'Class-specific Weapons :',
    normal: 'Normal',
    exceptional: 'Exceptional',
    elite: 'Elite',
    
    // Cube
    recipes: 'Recipes',
    note: 'NOTE:',
    ilvlNote: 'ilvl = item level | clvl = character level',
  },
  ru: {
    // Navigation
    uniqueItems: 'Уникальные предметы',
    runeWords: 'Рунные слова',
    allRunes: 'Все руны',
    setItems: 'Сетовые предметы',
    crafting: 'Крафтинг',
    whiteBases: 'Базовые предметы',
    cube: 'Куб',
    
    // Common UI
    searchBy: 'Поиск:',
    displayAs: 'Показать как:',
    row: 'строка',
    grid: 'сетка',
    showFilter: 'показать фильтр',
    hideFilter: 'скрыть фильтр',
    clearFilter: 'сбросить фильтр',
    
    // Page titles
    uniqueItemsTitle: 'УНИКАЛЬНЫЕ ПРЕДМЕТЫ',
    runeWordsTitle: 'РУНЫ',
    runesTitle: 'РУНЫ',
    setItemsTitle: 'СЕТОВЫЕ ПРЕДМЕТЫ',
    craftingTitle: 'КРАФТИНГ',
    basesTitle: 'БЕЛЫЕ ПРЕДМЕТЫ',
    cubeTitle: 'РЕЦЕПТЫ КУБА',
    
    // Filter categories
    classSpecificItems: 'Классовые предметы',
    normalUnique: 'Обычные уникальные',
    exceptionalUnique: 'Исключительные уникальные',
    eliteUnique: 'Элитные уникальные',
    
    // Additional UI
    loading: 'Загрузка...',
    buyMeCoffee: 'Купить мне кофе',
    
    // RuneWords
    runeFilter: 'Фильтр рун',
    allItems: 'Все предметы',
    
    // Runes
    rune: 'Руна',
    toUpgrade: 'для улучшения:',
    socketedProperties: 'Свойства в сокетах',
    weapon: 'Оружие:',
    armorHelmShield: 'Броня/Шлем/Щит:',
    shield: 'Щит:',
    ilvl: 'Ilvl:',
    clvlRequired: 'Треб. ур. перс:',
    highRune: '[HR]',
    
    // Set Items
    setItemsTitle: 'СЕТОВЫЕ ПРЕДМЕТЫ',
    classSpecificItemsLabel: 'Классовые предметы :',
    normalSets: 'Обычные сеты :',
    lodSets: 'LOD сеты :',
    
    // Crafting
    craftingTitle: 'КРАФТИНГ',
    faq: 'FAQ',
    allRecipes: 'Все рецепты',
    bloodRecipes: 'Рецепты крови',
    casterRecipes: 'Рецепты мага',
    hitpowerRecipes: 'Рецепты силы',
    safetyRecipes: 'Рецепты защиты',
    ingredients: 'Ингредиенты',
    craftedItem: 'Крафтовый предмет',
    comments: 'Комментарии',
    
    // Bases
    itemBases: 'БАЗОВЫЕ ПРЕДМЕТЫ',
    armors: 'Броня :',
    weapons: 'Оружие :',
    classSpecificArmor: 'Классовая броня :',
    classSpecificWeapons: 'Классовое оружие :',
    normal: 'Обычный',
    exceptional: 'Исключительный',
    elite: 'Элитный',
    
    // Cube
    recipes: 'Рецепты',
    note: 'ПРИМЕЧАНИЕ:',
    ilvlNote: 'ilvl = уровень предмета | clvl = уровень персонажа',
  }
}

export function useLanguage() {
  const language = computed(() => currentLanguage.value)
  
  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang
      localStorage.setItem('language', lang)
    }
  }
  
  const t = (key) => {
    return translations[currentLanguage.value]?.[key] || translations.en[key] || key
  }
  
  return {
    language,
    setLanguage,
    t
  }
}
