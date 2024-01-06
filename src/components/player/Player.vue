<template>
  <section class="p-2 w-full z-20">
    <div class="size-full bg-gradient-to-br border border-neutral-900 from-neutral-800 to-black sm:from-neutral-800 sm:to-black md:from-neutral-950 md:to-black rounded-xl flex flex-col shadow-lg p-2 gap-2">
      <div class="flex flex-nowrap gap-2">
        <!-- Cover -->
        <picture class="size-16 shrink-0 rounded-lg overflow-hidden">
          <img 
            class="size-full object-cover object-center" 
            src="https://i.scdn.co/image/ab67616d0000b273aa8935e536e0a8889fa0d051" 
            alt="Song cover">
        </picture>
        <!-- Song name / Artist -->
        <div class="flex-grow w-full">
          <p class="font-bold text-sm text-white">Erase una vez</p>
          <p class="text-sm text-emerald-700">Porta</p>
        </div>
        <div>
          <button @click="toggleLike()" :class="{'text-emerald-600': liked, 'text-white/60': !liked}" aria-label="like">
            <Heart v-if="!liked"/>
            <HeartFilled v-else style="filter: drop-shadow(0 0 3px rgb(6 95 70))"/>
          </button>
        </div>
      </div>

      <!-- Controls -->
      <div class="w-full flex-grow flex flex-col justify-between">
        <div class="flex items-center justify-center gap-8 shrink-0">
          <button class="p-1 text-white/80" aria-label="shuffle">
            <Shuffle />
          </button>
          <button class="p-1 text-white/80" aria-label="backward">
            <Backward />
          </button>
          <button @click="playPause()" :style="{'filter': (isPlaying ? 'drop-shadow(0 0 4px rgb(5 150 105 / 50%))' : 'none')}" class="p-2 mb-1 bg-emerald-600 text-black rounded-full transition-[filter]" aria-label="play">
            <Pause v-if="isPlaying" />
            <Play v-else />
          </button>
          <button class="p-1 text-white/80" aria-label="forward">
            <Forward />
          </button>
          <button class="p-1 text-white/80" aria-label="repeat">
            <Repeat />
          </button>
        </div>
        <Timeline @set-time="setCurrentTime($event)" :max="duration" :value="currentTime" class="w-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import Play from "../../Shared/icons/play.vue";
  import Pause from "../../Shared/icons/pause.vue";
  import Shuffle from "../../Shared/icons/shuffle.vue";
  import Repeat from "../../Shared/icons/repeat.vue";
  import Backward from "../../Shared/icons/backward.vue";
  import Forward from "../../Shared/icons/forward.vue";
  import Heart from "../../Shared/icons/heart.vue";
  import HeartFilled from "../../Shared/icons/heart-filled.vue";
  import { onMounted, ref } from "vue";
  import song from '../../assets/song.mp3'
  import Timeline from "./Timeline.vue";
  import useAudioPlayer from "../../composables/usePlayer";

  const { currentTime, duration, togglePlay, isPlaying, setSrc, setCurrentTime } = useAudioPlayer()

  const liked = ref(false)

  function toggleLike() {
    liked.value = !liked.value
  }

  function playPause() {
    togglePlay()
  }

  onMounted(() => {
    setSrc(song)
  })

</script>