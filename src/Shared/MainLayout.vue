<template>
  <main class="max-w-6xl mx-auto">
    <AppHeader class="w-full p-2 sticky top-0 z-10"/>
    <router-view></router-view>
    <Player class="sticky bottom-0"/>
  </main>
</template>

<script setup>
  import AppHeader from '../components/header/AppHeader.vue';
import Player from '../components/player/Player.vue';
</script>