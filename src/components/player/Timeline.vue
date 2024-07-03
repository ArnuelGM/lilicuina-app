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
  <div class="gap-y-1 flex flex-wrap justify-between">
    <div role="progressbar"
      class="flex-grow rounded-full h-1 cursor-pointer relative w-full overflow-hidden"
      @click="calcSetTime($event)"
      :style="{'--progressValue': `${timelineProgressValue}%`}"
      :class="{
        'bg-white/5': theme === `dark`,
        'bg-black/20': theme === `ligth`
      }"
    >
    </div>
    <time 
      class="text-xs opacity-60 leading-none"
      :class="{
        'text-white': theme === `dark`,
        'text-black': theme === `ligth`,
      }"
    >{{ currentTime }}</time>
    <time 
      class="text-xs dark:text-white opacity-60 leading-none"
      :class="{
        'text-white': theme === `dark`,
        'text-black': theme === `ligth`,
      }"
    >{{ duration }}</time>
  </div>
</template>
<script setup>
  import { computed, onMounted, ref } from 'vue'

  /**
  * Emits
  */
  const emit = defineEmits([
    'setTime'
  ])

  /**
   * Props
   */
  const props = defineProps({
    max: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    theme: {
      default: undefined
    }
  })

  const theme = ref("dark")
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

  function defineTheme() {
    if(window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      theme.value = props.theme ?? "dark"
    }
    else {
      theme.value = props.theme ?? "ligth"
    }
  }

  onMounted(() => {
    defineTheme()
  })
</script>