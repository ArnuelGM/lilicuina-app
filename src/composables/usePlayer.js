// Write a vue composable to manage audio reproduction,
// export function to set current time of a audio, a variable that contains the current audio time,
// another variable contains the current time of the audio reproduction,
// and functions to control play and pause
import { ref, watch } from "vue";

export default function useAudioPlayer() {
  const url = ref('')
  const audio = ref(null)
  const currentTime = ref(0)
  const duration = ref(0)
  const isPlaying = ref(false)
  const volume = ref(.8)

  function setSrc(src) {
    url.value = src
  }

  function setCurrentTime(value) {
    if (audio.value) {
      audio.value.currentTime = value;
    }
  }

  function setVolume(v) {
    volume.value = v / 100
    if (audio.value) {
      audio.value.volume = v
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
      audio.value.volume = volume.value
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
    volume
  };
}
