import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App.vue";
import WineView from "@/views/WineView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/wine',
      name: 'wineView',
      component: WineView
    },
  ]
})

export default router
