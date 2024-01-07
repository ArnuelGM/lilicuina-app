<template>
  <header class="z-20 h-16 flex items-center justify-between">
    <div class="py-2 px-6 rounded-full dark:bg-black/60 bg-white/80 backdrop-blur shadow-lg">
      <h1 
        class="font-black text-3xl text-transparent bg-gradient-to-br from-emerald-700 via-purple-400 to-white bg-clip-text">
        Fyesta
      </h1>
    </div>
    <div class="flex items-center gap-2">
      <button aria-label="Search" class="p-2 dark:bg-black/60 dark:text-white bg-white/80 text-black shadow-md backdrop-blur hover:scale-105 transition-transform rounded-full">
        <Search/>
      </button>
      <button aria-label="Playlist" class="p-2 dark:bg-black/60 dark:text-white bg-white/80 text-black shadow-md backdrop-blur hover:scale-105 transition-transform rounded-full">
        <Playlist/>
      </button>
      <button aria-label="Upload" class="p-2 dark:bg-black/60 dark:text-white bg-white/80 text-black shadow-md backdrop-blur hover:scale-105 transition-transform rounded-full">
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