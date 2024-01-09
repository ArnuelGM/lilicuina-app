<style scoped>
  [role=progressbar]::before {
    content: "";
    display: block;
    height: 100%;
    border-radius: 9999px;
    background-color: rgb(5 150 105);
    position: relative;
    left: 0;
    width: var(--progressValue);
  }
</style>
<template>
  <div class="flex items-center gap-2">
    <time class="text-xs w-10 text-white">{{ currentTime }}</time>
    <div 
      role="progressbar"
      class="flex-grow rounded-full h-1 cursor-pointer bg-white/5 relative" 
      @click="calcSetTime($event)" :style="{'--progressValue': `${timelineProgressValue}%`}">
    </div>
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

  const timelineProgressValue = computed(() => {
    const percent = props.value / props.max * 100
    if(isNaN(percent)) return 0
    return percent
  })

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