<template>
  <section>
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-bold text-xl">Top Artists</h2>
      <SliderControllers @prev="nextElement($event)" @next="nextElement($event)"/>
    </div>
    <ul class="flex flex-nowrap overflow-x-auto gap-x-4 custom-scrollbar snap-x snap-mandatory" ref="slider">
      <li v-for="artist in artists" class="flex-shrink-0 flex flex-col items-center group snap-start cursor-pointer">
        <picture class="size-32 overflow-hidden rounded-full shadow-md">
          <img :src="artist.image" class="size-full object-cover object-center group-hover:scale-105 transition-transform">
        </picture>
        <p class="mt-2 text-sm tracking-wider">{{ artist.name }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import SliderControllers from './SliderControllers.vue';
  import useSlider from '../composables/useSlider';

  const slider = ref('slider')
  const { nextElement } = useSlider(slider)

  const artists = ref([
    {
      name: 'LoFi Girl',
      image: 'https://i.scdn.co/image/ab67616d00001e026a1dba7aac5452dfd8f85a01'
    },
    {
      name: 'Porta',
      image: 'https://i.scdn.co/image/ab67616100005174ea4b0b2796621cc1ce130c1f'
    },
    {
      name: 'Eminem',
      image: 'https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b'
    },
    {
      name: 'Cancerbero',
      image: 'https://i.scdn.co/image/ab67616100005174a91405d63c939682e4efdcbc'
    },
    {
      name: 'Arcangel',
      image: 'https://i.scdn.co/image/ab67616100005174afdf17286a0d7a23ad388587'
    },
    {
      name: 'Metallica',
      image: 'https://i.scdn.co/image/ab6761610000517469ca98dd3083f1082d740e44'
    },
    {
      name: 'Therion',
      image: 'https://i.scdn.co/image/ab676161000051749a7f93205c66fe4181cede4a'
    },
    {
      name: 'The GazettE',
      image: 'https://i.scdn.co/image/ab67616100005174458fb4e56460b83b02d0758d'
    },
    {
      name: 'Evanescence',
      image: 'https://i.scdn.co/image/ab676161000051747ecf213c7dd78e0049379c5b'
    },
    {
      name: 'PXNDX',
      image: 'https://i.scdn.co/image/ab67616100005174b567ff9dc4dc5f2dc1201daa'
    },
    {
      name: 'Bob Marley',
      image: 'https://i.scdn.co/image/ab67616d00001e02a8593daaadc17a9ba7c50e70'
    },
    {
      name: 'Selena Gomez',
      image: 'https://i.scdn.co/image/ab676161000051740c8eb928813cd06614c0710d'
    },
    {
      name: 'Atarashii Gako',
      image: 'https://i.scdn.co/image/ab6761610000517409a59951603a0472a7cc2d8a'
    }
  ])

</script>