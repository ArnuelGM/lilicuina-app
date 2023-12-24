<template>
  <section class="grid sm:grid-cols-2 gap-1">
    <article class="flex items-start flex-nowrap" v-for="i in 30">
      <picture class="shrink-0 size-20 overflow-hidden p-2">
        <img class="w-full h-full object-cover object-center rounded"
          src="https://i.scdn.co/image/ab67616d0000b273aa8935e536e0a8889fa0d051" 
          alt="song cover">
      </picture>
      <div class="flex-grow flex flex-col self-stretch p-2">
        <h1 class="font-bold text-lg">Érase una vez</h1>
        <h2 class="text-sm text-slate-500">Porta</h2>
      </div>
    </article>
  </section>
</template>