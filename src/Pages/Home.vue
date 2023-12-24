<template>
  <section class="grid sm:grid-cols-2 gap-px">
    <SongItem v-for="i in 30"/>
  </section>
</template>

<script setup>
  import SongItem from '../components/SongItem.vue';
</script>