import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorSchemeStore = defineStore('color-scheme', () => {

  const colorScheme = ref('ligth')
  const isDarkMode = ref(false)
  const isLigthMode = ref(false)

  function defineTheme() {
    if(window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      colorScheme.value = "dark"
      isDarkMode.value = true
      isLigthMode.value = false
    }
    else {
      colorScheme.value = "ligth"
      isDarkMode.value = false
      isLigthMode.value = true
    }
  }

  window
    .matchMedia(`(prefers-color-scheme: dark)`)
    .addEventListener(`change`, (event) => {
      defineTheme()
    })

  // first time theme definition
  defineTheme()
    
  return {
    colorScheme,
    isDarkMode,
    isLigthMode,
  }
})