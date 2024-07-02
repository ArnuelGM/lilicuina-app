<template>
  <section>
    <h2 class="font-bold text-xl mb-4">Populars Songs</h2>
    <div class="grid gap-2 grid-cols-4 auto-rows-[10rem] md:auto-rows-[11rem] lg:auto-rows-[13rem] lg:gap-4">
      <div class="rounded-lg col-span-2">
        <PopularItem class="group" />
      </div>
      <div class="rounded-lg col-span-2 md:col-span-1">
        <PopularItem class="group" title="Feliz Navidad 8" artist="Arcangel" img="https://i.scdn.co/image/ab67616d00001e023e50a1c918378ccc5ce8c276"/>
      </div>
      <div class="rounded-lg col-span-2 md:col-span-1">
        <PopularItem class="group" title="Lofi beats" artist="LoFi Girl" img="https://i.scdn.co/image/ab67706c0000da84f396bdf13f6473f86bf4e2c0"/>
      </div>
      <div class="rounded-lg col-span-2 md:col-span-1">
        <PopularItem class="group" title="Erase una vez" artist="Porta" img="https://i.scdn.co/image/ab67616d0000b273aa8935e536e0a8889fa0d051"/>
      </div>
      <div class="rounded-lg col-span-2">
        <PopularItem class="group" title="Mundo de Piedra" artist="Canserbero" img="https://i.scdn.co/image/ab67616d00001e02fd7bf6e660e2da01813c70f7"/>
      </div>
      <div class="rounded-lg col-span-2 md:col-span-1">
        <PopularItem class="group" title="ARCADE NIGHT" artist="AIKA" img="https://i.scdn.co/image/ab67616d00001e020ca3f5b4482504bdcba38fff"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  import PopularItem from './PopularItem.vue';
</script>
