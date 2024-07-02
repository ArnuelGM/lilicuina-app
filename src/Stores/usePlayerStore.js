import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const usePlayerStore = defineStore('player-store', () => {
  const url         = ref("");
  const audio       = ref(null);
  const currentTime = ref(0);
  const duration    = ref(0);
  const isPlaying   = ref(false);
  const volume      = ref(0.8);

  function setSrc(src) {
    url.value = src;
  }

  function setCurrentTime(value) {
    if (audio.value) {
      audio.value.currentTime = value;
    }
  }

  function setVolume(v) {
    volume.value = v / 100;
    if (audio.value) {
      audio.value.volume = v;
    }
  }

  function togglePlay() {
    if (audio.value) {
      isPlaying.value ? audio.value.pause() : audio.value.play();
    }
  }

  function handlePlay() {
    isPlaying.value = true;
  }

  function handlePause() {
    isPlaying.value = false;
  }

  watch(url, (newUrl) => {
    if (newUrl) {
      audio.value = new Audio(newUrl);
      audio.value.volume = volume.value;
      audio.value.addEventListener("timeupdate", () => {
        currentTime.value = audio.value.currentTime;
      });
      audio.value.addEventListener("loadedmetadata", () => {
        duration.value = audio.value.duration;
      });
      audio.value.addEventListener("play", handlePlay);
      audio.value.addEventListener("pause", handlePause);
    }
  });

  return {
    audio,
    currentTime,
    duration,
    isPlaying,
    setCurrentTime,
    togglePlay,
    setSrc,
    setVolume,
    volume,
  };
})