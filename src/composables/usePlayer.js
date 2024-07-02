import { usePlayerStore } from "../Stores/usePlayerStore";
import { storeToRefs } from "pinia";

export default function useAudioPlayer() {

  const playerStore = usePlayerStore()
  const {
    audio,
    currentTime,
    duration,
    isPlaying,
    volume
  } = storeToRefs(playerStore);

  const setSrc          = playerStore.setSrc;
  const setCurrentTime  = playerStore.setCurrentTime;
  const setVolume       = playerStore.setVolume;
  const togglePlay      = playerStore.togglePlay;

  return {
    audio,
    volume,
    setSrc,
    duration,
    isPlaying,
    setVolume,
    togglePlay,
    currentTime,
    setCurrentTime,
  };
}
