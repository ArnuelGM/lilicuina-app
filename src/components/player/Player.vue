<template>
  <section class="p-2 w-full h-40">
    <div class="size-full bg-black rounded-xl flex flex-col shadow-xl shadow-white/10 p-2 gap-2">
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
          <button @click="toggleLike()">
            <Heart v-if="!liked" />
            <HeartFilled v-else />
          </button>
        </div>
      </div>

      <!-- Controls -->
      <div class="w-full flex-grow flex flex-col justify-between">
        <div class="flex items-center justify-center gap-8 shrink-0">
          <button>
            <Shuffle />
          </button>
          <button class="p-1" aria-lable="back">
            <Backward />
          </button>
          <button @click="wavesurfer?.playPause()" class="p-1" aria-lable="play">
            <Pause v-if="isPlaying" />
            <Play v-else />
          </button>
          <button class="p-1" aria-lable="next">
            <Forward />
          </button>
          <button>
            <Repeat />
          </button>
        </div>
        <div class="flex items-center gap-2">
          <small class="text-xs">{{ currentTime }}</small>
          <div class="flex-grow" id="wavearea"></div>
          <small class="text-xs">{{ duration }}</small>
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
  import { onMounted } from "vue";
  import song from '../../assets/song.mp3'

  let wavesurfer
  let isPlaying = false
  let liked = false
  let currentTime = '00:00'
  let duration = '00:00'

  function toggleLike() {
    liked = !liked
    console.log(liked)
  }

  /**
   * Return time formated to min:sec
   * @param {number} time 
   */
  function formatTime(time) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60);
    return `${ String(minutes).padStart(2, '') }:${ String(seconds).padStart(2, '0') }`
}

  onMounted(() => {
    wavesurfer = WaveSurfer.create({
      url: song,
      container: "#wavearea",
      height: 20,
      barHeight: 0.01,
      normalize: false,
      cursorWidth: 2,
      interact: true,
      waveColor: '#082f49',
      progressColor: "#d8b4fe",
      cursorColor: '#ca8a04',
    })
    wavesurfer.setVolume(.8)
    wavesurfer.on('play', () => isPlaying = wavesurfer.isPlaying())
    wavesurfer.on('pause', () => isPlaying = wavesurfer.isPlaying())
    wavesurfer.on('timeupdate', (event) => currentTime = formatTime(event))
    wavesurfer.on('ready', (event) => duration = formatTime(event))
  })

</script>