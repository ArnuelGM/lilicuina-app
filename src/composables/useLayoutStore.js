import { useMainLayoutStore } from "../Stores/useMainLayoutStore";

export default function useLayout() {

  const {
    headerVisible,
    playerVisible,
  } = useMainLayoutStore()

  return {
    headerVisible,
    playerVisible,
  }
}