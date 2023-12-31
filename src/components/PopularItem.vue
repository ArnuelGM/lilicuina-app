<style scoped>
  .shadow-text {
    text-shadow: 
      0 0 2px #6b7280,
      0 0 2px #6b7280,
      0 0 2px #6b7280,
      0 0 2px #6b7280,
      0 0 2px #6b7280;
  }
</style>
<template>
  <div class="size-full relative overflow-hidden shadow-md rounded-lg">
    <p class="absolute m-2 top-0 left-0 text-white font-semibold leading-4 shadow-text">
      {{ title ?? 'Cassis'}}
    </p>
    <img 
      class="size-full object-cover object-center"
      :src="img ?? 'https://i.scdn.co/image/ab67616d0000b2736e565a6102762a45274fd486'" 
      alt="Song cover">
    <p class="absolute bottom-0 left-0 font-medium m-2 text-sm text-white shadow-text">
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