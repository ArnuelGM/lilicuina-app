<style scoped>
.text-shadow {
  text-shadow: 1px 1px 0 rgb(0 0 0 / 80%);
}
</style>
<template>
  <div class="size-full relative overflow-hidden shadow-md rounded-lg">
    <h3 class="text-shadow absolute z-10 p-2 pb-4 top-0 left-0 text-white font-semibold leading-4 w-full bg-gradient-to-b from-black/40 to-transparent">
      {{ title ?? 'Cassis'}}
    </h3>
    <img 
      class="size-full object-cover object-center group-hover:scale-105 transition-transform"
      :src="img ?? 'https://i.scdn.co/image/ab67616d0000b2736e565a6102762a45274fd486'" 
      alt="Song cover">
    <p class="text-shadow absolute bottom-0 left-0 font-medium p-2 pt-4 text-sm text-white w-full bg-gradient-to-t from-black/40 to-transparent">
      {{ artist ?? 'The Gazzets'}}
    </p>
  </div>
</template>

<script setup>

  defineProps([
    'img',
    'title',
    'artist'
  ])

</script>