<template>
  <article class="flex items-start flex-nowrap gap-x-2">
    <picture class="shrink-0 size-20 overflow-hidden">
      <img v-if="Math.random() >= .5" class="size-full object-cover object-center rounded"
        src="https://i.scdn.co/image/ab67616d0000b273aa8935e536e0a8889fa0d051" alt="song cover">
      <div v-else class="size-full bg-black rounded" role="img">
        <Disc class="size-full text-emerald-700" />
      </div>
    </picture>
    <div class="flex-grow flex flex-col self-stretch py-2 pr-2">
      <p class="font-bold text-md text-emerald-900 dark:text-white">Erase una vez</p>
      <p class="text-sm text-gray-600">Porta</p>
    </div>
    <div class="shrink-0 flex flex-col self-stretch mr-2 mt-2">
      <button aria-label="Song Menú">
        <Dots class="w-6 text-slate-400"/>
      </button>
    </div>
  </article>
</template>

<script setup>
  import Disc from '../Shared/icons/disc.vue';
  import Dots from '../Shared/icons/dots.vue';
</script>