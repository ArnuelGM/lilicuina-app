<template>
  <section class="p-2 w-full h-40">
    <div class="size-full bg-black rounded-xl flex flex-col shadow-xl p-2 gap-2 border border-sky-900">
      <div class="flex flex-nowrap gap-2">
        <!-- Cover -->
        <picture class="size-16 shrink-0 rounded-lg overflow-hidden">
          <img 
            class="size-full object-cover object-center" 
            src="https://i.scdn.co/image/ab67616d0000b273aa8935e536e0a8889fa0d051" 
            alt="Song cover">
        </picture>
        <!-- Song name / Artist -->
        <div class="flex-grow w-full">
          <p class="font-bold text-sm text-white">Erase una vez</p>
          <p class="text-sm text-emerald-700">Porta</p>
        </div>
      </div>

      <!-- Controls -->
      <div class="w-full flex-grow flex flex-col justify-between">
        <div class="flex items-center justify-center gap-4 shrink-0">
          <button class="p-1" aria-lable="back">
            <Back />
          </button>
          <button class="p-1" aria-lable="play">
            <Play />
          </button>
          <button class="p-1" aria-lable="next">
            <Forward />
          </button>
        </div>
        <div class="flex items-center gap-2 ">
          <small class="text-xs">02:30</small>
          <input type="progress" class="flex-grow">
          <small class="text-xs">04:45</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Play from "../../Shared/icons/play.vue";
  import Back from "../../Shared/icons/back.vue";
  import Forward from "../../Shared/icons/forward.vue";
</script>