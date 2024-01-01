<template>
  <header class="z-20 h-16 flex items-center justify-between backdrop-blur dark:bg-black/80 bg-white/90">
    <h1 
      class="font-black text-3xl text-transparent bg-gradient-to-br from-emerald-700 via-purple-400 to-white bg-clip-text">
      Fyesta
    </h1>
    <div class="flex items-center gap-4">
      <button aria-label="Search">
        <Search/>
      </button>
      <button aria-label="Playlist">
        <Playlist/>
      </button>
      <button aria-label="Upload">
        <Upload/>
      </button>
    </div>
  </header>
</template>

<script setup>
  import Upload from '../../Shared/icons/upload.vue';
  import Playlist from '../../Shared/icons/playlist.vue';
  import Search from '../../Shared/icons/search.vue';
</script>