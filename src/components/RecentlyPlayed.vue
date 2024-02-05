<template>
  <section class="p-2">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-bold text-xl">Recently Played</h2>
      <SliderControllers @prev="nextElement($event)" @next="nextElement($event)"/>
    </div>
    <ul class="flex flex-nowrap overflow-x-auto gap-4 custom-scrollbar snap-x snap-mandatory" ref="slider">
      <li v-for="recently in recentlyPlayed" class="w-32 h-40 rounded-lg shrink-0 snap-start">
        <PopularItem v-bind="recently" class="group" />
      </li>
    </ul>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import SliderControllers from './SliderControllers.vue'
  import PopularItem from './PopularItem.vue';
  import useSlider from '../composables/useSlider';

  const recentlyPlayed = ref([
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02aa38ffc0e9d1d5b49b52ed60',
      title: 'Disculpa los malos pensamientos',
      artist: 'PXNDX'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e021c40418d1c37d727e8e91b04',
      title: 'Could You be Loved',
      artist: 'Bob Marley'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e021a065a15d5ab31eb27be2bc3',
      title: 'Helheim',
      artist: 'Therion'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e0225f49ab23f0ec6332efef432',
      title: 'Bring me to life',
      artist: 'Evanecense'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e023e50a1c918378ccc5ce8c276',
      title: 'Feliz navidad 8',
      artist: 'Arcangel'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02f98871b721be4cd034a3904f',
      title: 'OTONABLUE',
      artist: 'Atarashii Gakko!'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e0252ab2c1657a3e548ff021411',
      title: '8 Mile',
      artist: 'Eminem'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02f19fda09d4d2a7381cba03de',
      title: 'El metemono',
      artist: 'El Pupy Original'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e025d9126f72b4a06c9b9abe2e5',
      title: 'The heart wants what it wants',
      artist: 'Selena Gomez'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e029ad3e9959f48d513886b8933',
      title: 'For whom the bell tolls',
      artist: 'Metallica'
    },
  ])

  const slider = ref('slider')
  const { nextElement } = useSlider(slider)

</script>