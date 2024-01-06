<template>
  <div class="flex items-center gap-2">
    <time class="text-xs w-10 text-white">{{ currentTime }}</time>
    <progress 
      class="flex-grow h-1 rounded-full cursor-pointer" 
      :max="max ?? 0" 
      :value="value ?? 0" 
      @click="calcSetTime($event)">
    </progress>
    <time class="text-xs w-10 text-right text-white">{{ duration }}</time>
  </div>
</template>
<script setup>
  import { computed } from 'vue'

  /**
  * Emits
  */
  const emit = defineEmits([
    'setTime'
  ])

  /**
   * Props
   */
  const props = defineProps([
    'max',
    'value'
  ])

  const currentTime = computed(() => formatTime(props.value))
  const duration = computed(() => formatTime(props.max))

  /**
   * Return time formated to min:sec
   * @param {number} time 
   */
  function formatTime(time) {
    if(isNaN(time)) return '00:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time - minutes * 60);
    return `${ String(minutes).padStart(2, '0') }:${ String(seconds).padStart(2, '0') }`
  }

  function calcSetTime(event) {
    const percent = event.offsetX / event.target.clientWidth;
    let setValue = percent * props.max
    if (isNaN(setValue)) return
    else emit('setTime', setValue)
  }

</script>