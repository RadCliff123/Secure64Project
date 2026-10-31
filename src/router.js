import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

// Pages beyond the homepage are placeholders until we design them.
const ComingSoon = () => import('./views/ComingSoonView.vue')

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/:pathMatch(.*)*', name: 'coming-soon', component: ComingSoon }
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 72 }
    return { top: 0 }
  }
})
