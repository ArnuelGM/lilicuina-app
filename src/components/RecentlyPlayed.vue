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
  <section class="p-2">
    <h2 class="font-bold text-xl mb-4">Recently Played</h2>
    <ul class="flex flex-nowrap overflow-x-auto gap-4 recently-played snap-x snap-mandatory">
      <li v-for="i in 10" class="w-32 h-40 rounded-lg overflow-hidden shrink-0 snap-start">
        <PopularItem />
      </li>
    </ul>
  </section>
</template>

<script setup>
  import PopularItem from './PopularItem.vue';
</script>