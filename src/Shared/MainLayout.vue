<template>
  <AppHeader v-if="headerVisible" class="w-full sticky top-0 z-10" />
  <main class="max-w-6xl mx-auto flex-shrink-0 relative px-4">
    <router-view></router-view>
  </main>
  <Player v-if="playerVisible" class="sticky bottom-0" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import AppHeader  from '../components/header/AppHeader.vue';
import Player     from '../components/player/Player.vue';
import { useMainLayoutStore } from '../Stores/useMainLayoutStore';

const layourStore = useMainLayoutStore()
const { headerVisible, playerVisible } = storeToRefs(layourStore)

</script>