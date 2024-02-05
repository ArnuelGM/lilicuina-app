<template>
  <div class="flex items-center gap-x-4">
    <button @click="$emit('prev', -1)" aria-label="scroll left" class="text-black/60 dark:text-white/60">
      <ChevronLeft />
    </button>
    <button @click="$emit('next', 1)" aria-label="scroll right" class="text-black/60 dark:text-white/60">
      <ChevronRight />
    </button>
  </div>
</template>
<script setup>
  import ChevronLeft from '../Shared/icons/chevron-left.vue';
  import ChevronRight from '../Shared/icons/chevron-right.vue';
</script>