<template>
  <section class="w-full">
    <div class="flex flex-col gap-4 sm:flex-row pt-8">
      <picture class="overflow-hidden rounded-md sm:w-1/3 sm:shrink-0">
        <img src="https://i.scdn.co/image/ab67616d0000b273aa8935e536e0a8889fa0d051"
          class="w-full h-full object-cover" />
      </picture>

      <div class="w-full pt-4">
        <div class="h-full flex-grow flex flex-col justify-between">
          <div class="flex flex-nowrap gap-2">
            <div class="flex-grow overflow-hidden">
              <div class="w-full overflow-hidden" ref="despCont">
                <h1 class="font-bold text-2xl dark:text-white leading-6">
                  Erase una vez
                </h1>
              </div>
              <div class="w-full overflow-hidden">
                <p class="font-semibold text-lg text-emerald-700 w-full">
                  Porta
                </p>
              </div>
            </div>
            <div class="inline-flex gap-2 items-start">
              <button @click="toggleLike()" class="text-emerald-600" aria-label="like">
                <HeartFilled v-if="liked" style="filter: drop-shadow(0 0 3px rgb(6 95 70))" />
                <Heart v-else />
              </button>
              <button class="text-emerald-600" aria-label="resize">
                <Resize @click="goBack" style="filter: drop-shadow(0 0 3px rgb(6 95 70))" />
              </button>
            </div>
          </div>
          <Timeline 
            @set-time="setCurrentTime($event)" 
            :max="duration" 
            :value="currentTime" 
            class="w-full my-8" />
          <div class="w-full flex flex-col justify-between">
            <!-- Controls -->
            <div class="flex items-center justify-between gap-x-5 sm:gap-x-8 md:gap-x-10 shrink-0">
              <button class="size-10 grid place-content-center dark:text-white rounded-full" aria-label="shuffle">
                <Shuffle />
              </button>
              <button class="size-10 grid place-content-center dark:text-white rounded-full" aria-label="backward">
                <Backward />
              </button>
              <button @click="playPause()"
                :style="{ 'filter': (isPlaying ? 'drop-shadow(0 0 4px rgb(5 150 105 / 50%))' : 'none') }"
                class="size-16 grid place-content-center p-2 mb-1 bg-emerald-600 text-black rounded-full transition-[filter]"
                aria-label="play">
                <Pause v-if="isPlaying" />
                <Play v-else />
              </button>
              <button class="size-10 grid place-content-center dark:text-white rounded-full" aria-label="forward">
                <Forward />
              </button>
              <button class="size-10 grid place-content-center dark:text-white rounded-full" aria-label="repeat">
                <Repeat />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useMainLayoutStore } from '../Stores/useMainLayoutStore';
import Heart from '../Shared/icons/heart.vue';
import Forward from '../Shared/icons/forward.vue';
import Repeat from '../Shared/icons/repeat.vue';
import Pause from '../Shared/icons/pause.vue';
import Play from '../Shared/icons/play.vue';
import Backward from '../Shared/icons/backward.vue';
import Shuffle from '../Shared/icons/shuffle.vue';
import Resize from '../Shared/icons/resize.vue';
import HeartFilled from '../Shared/icons/heart-filled.vue';
import Timeline from '../components/player/Timeline.vue';
import useAudioPlayer from "../composables/usePlayer";
import song from '../assets/song.mp3'
import { useRouter } from 'vue-router';

const {
  currentTime,
  duration,
  togglePlay,
  isPlaying,
  setSrc,
  setCurrentTime
} = useAudioPlayer()

const liked = ref(false)

const router = useRouter()

const layoutStore = useMainLayoutStore()

onMounted(() => {
  setSrc(song)
  layoutStore.setPlayerVisible(false)
})
onUnmounted(() => layoutStore.setPlayerVisible(true))

function toggleLike() {
  liked.value = !liked.value
}

function playPause() {
  togglePlay()
}

function goBack() {
  router.back()
}

</script>