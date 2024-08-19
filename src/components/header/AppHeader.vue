<template>
  <div class="z-20 border-b border-neutral-300 dark:border-neutral-800 backdrop-blur-lg dark:bg-neutral-900/90 bg-neutral-100/90">
    <header class="px-4 max-w-6xl mx-auto h-12 flex items-center justify-between">
      <h1 
        class="font-black text-3xl text-transparent bg-gradient-to-br from-emerald-700 via-purple-400 to-amber-300 bg-clip-text">
        Fyesta
      </h1>
      <div class="flex items-center gap-2">
        <button aria-label="Search" class="p-2 dark:text-slate-300 text-black hover:scale-[115%] transition-transform rounded-full">
          <Search class="size-5"/>
        </button>
        <button aria-label="Playlist" class="p-2 dark:text-slate-300 text-black hover:scale-[115%] transition-transform rounded-full">
          <Playlist class="size-5"/>
        </button>
        <button aria-label="Upload" class="p-2 dark:text-slate-300 text-black hover:scale-[115%] transition-transform rounded-full">
          <Upload class="size-5"/>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
  import Upload from '../../Shared/icons/upload.vue';
  import Playlist from '../../Shared/icons/playlist.vue';
  import Search from '../../Shared/icons/search.vue';
</script>