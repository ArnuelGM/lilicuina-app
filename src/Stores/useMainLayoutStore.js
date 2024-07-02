import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainLayoutStore = defineStore('main-layout', () => {

  const headerVisible = ref(true);
  const playerVisible = ref(true);

  function setHeaderVisible(visibility) {
    headerVisible.value = visibility;
  }

  function setPlayerVisible(visibility) {
    playerVisible.value = visibility;
  }

  return {
    headerVisible,
    playerVisible,
    setHeaderVisible,
    setPlayerVisible,
  }
})