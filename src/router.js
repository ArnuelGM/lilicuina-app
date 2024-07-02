import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./Pages/Home.vue";
import PlayingNow from "./Pages/PlayingNow.vue";

const routes = [
  {
    path: "/playing-now",
    component: PlayingNow,
  },
  {
    path: "/",
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
