<style scoped>

  .recently-played {
    --sb-track-color: transparent;
    --sb-thumb-color: rgb(4, 120, 87);
    --sb-size: 2px;

    scrollbar-color: var(--sb-thumb-color) 
                    var(--sb-track-color);
  }

  .recently-played::-webkit-scrollbar {
    width: var(--sb-size);
    height: var(--sb-size);
  }

  .recently-played::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 10px;
  }

  .recently-played::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 10px;
  }
</style>
<template>
  <section class="p-2 mb-4">
    <h2 class="font-bold text-xl mb-4">Reproducidas recientemente</h2>
    <ul class="flex flex-nowrap overflow-x-auto gap-4 recently-played snap-x snap-mandatory">
      <li v-for="i in 10" class="w-32 h-40 relative rounded-lg overflow-hidden shrink-0 snap-start">
        <p class="absolute m-2 top-0 left-0 text-white font-bold" style="text-shadow: 1px 1px 0 black;">
          Cassis
        </p>
        <img 
          class="size-full object-cover object-center" 
          src="https://i.scdn.co/image/ab67616d0000b2736e565a6102762a45274fd486" 
          alt="Song cover">
        <p class="absolute bottom-0 left-0 m-2 text-sm text-white" style="text-shadow: 1px 1px 0 black;">
          The Gazzets
        </p>
      </li>
    </ul>
  </section>
  <section>
    <h2 class="font-bold text-xl mb-4 ml-2">Últimas subidas</h2>
    <div class="grid sm:grid-cols-2 gap-px">
      <SongItem v-for="i in 30"/>
    </div>
  </section>
</template>

<script setup>
  import SongItem from '../components/SongItem.vue';
</script>