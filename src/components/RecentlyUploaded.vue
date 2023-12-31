<template>
  <section>
    <h2 class="font-bold text-xl mb-2 ml-2">Recently Uploaded</h2>
    <div class="grid sm:grid-cols-2 gap-px">
      <SongItem v-for="i in 30"/>
    </div>
  </section>
</template>

<script setup>
  import SongItem from './SongItem.vue';
</script>