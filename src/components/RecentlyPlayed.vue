<style scoped>
  .recently-played::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
<template>
  <section class="p-2">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-bold text-xl">Recently Played</h2>
      <div class="flex items-center gap-x-4">
        <button @click="nextElement(-1)" aria-label="scroll left" class="text-black/60 dark:text-white/60">
          <ChevronLeft />
        </button>
        <button @click="nextElement(1)" aria-label="scroll right" class="text-black/60 dark:text-white/60">
          <ChevronRight />
        </button>
      </div>
    </div>
    <ul class="flex flex-nowrap overflow-x-auto gap-4 recently-played snap-x snap-mandatory" ref="slider">
      <li v-for="i in 10" class="w-32 h-40 rounded-lg shrink-0 snap-start">
        <PopularItem />
      </li>
    </ul>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import ChevronLeft from '../Shared/icons/chevron-left.vue';
  import ChevronRight from '../Shared/icons/chevron-right.vue';
  import PopularItem from './PopularItem.vue';

  const slider = ref('slider')

  function nextElement(direction = 1) {
    const ITEM_WIDTH = slider.value.querySelector('li').clientWidth
    slider.value.scrollBy({left: (ITEM_WIDTH * direction), behavior: 'smooth',  })
  }
</script>