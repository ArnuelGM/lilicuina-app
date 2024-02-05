
<template>
  <TopArtists class="mt-4" />
  <Populars class="mt-4" />
  <RecentlyPlayed class="mt-4" />
  <RecentlyUploaded class="mt-4" />
</template>

<script setup>
  import Populars from '../components/Populars.vue';
  import RecentlyPlayed from '../components/RecentlyPlayed.vue';
  import RecentlyUploaded from '../components/RecentlyUploaded.vue';
  import TopArtists from '../components/TopArtists.vue';
</script>