<template>
  <main class="max-w-6xl mx-auto">
    <header>
      <h1 class="text-bold text-2xl">Fyesta</h1>
    </header>
    <router-view></router-view>
    <footer class="sticky bottom-0">
      <Player />
    </footer>
  </main>
</template>

<script setup>
  import Player from '../components/player/Player.vue';
</script>