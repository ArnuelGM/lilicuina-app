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
        <div class="flex items-center gap-2">
          <time class="text-xs w-10 text-white">{{ currentTime }}</time>
          <div class="flex-grow" id="wavearea"></div>
          <time class="text-xs w-10 text-right text-white">{{ duration }}</time>
        </div>
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
  import WaveSurfer from "wavesurfer.js";
  import { onMounted, ref } from "vue";
  import song from '../../assets/song.mp3'

  const wavesurfer = ref(null)
  const isPlaying = ref(false)
  const liked = ref(false)
  const currentTime = ref('00:00')
  const duration = ref('00:00')

  function toggleLike() {
    liked.value = !liked.value
  }

  function playPause() {
    wavesurfer.value?.playPause()
  }

  /**
   * Return time formated to min:sec
   * @param {number} time 
   */
  function formatTime(time) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60);
    return `${ String(minutes).padStart(2, '0') }:${ String(seconds).padStart(2, '0') }`
  }

  onMounted(() => {
    wavesurfer.value = WaveSurfer.create({
      url: song,
      container: "#wavearea",
      height: 20,
      barHeight: 0.01,
      normalize: false,
      cursorWidth: 2,
      interact: true,
      waveColor: '#022c22',
      progressColor: "#047857",
      cursorColor: '#ca8a04',
    })
    wavesurfer.value.setVolume(.8)
    wavesurfer.value.on('play', () => isPlaying.value = wavesurfer.value.isPlaying())
    wavesurfer.value.on('pause', () => isPlaying.value = wavesurfer.value.isPlaying())
    wavesurfer.value.on('timeupdate', (event) => currentTime.value = formatTime(event))
    wavesurfer.value.on('ready', (event) => duration.value = formatTime(event))
  })

</script>