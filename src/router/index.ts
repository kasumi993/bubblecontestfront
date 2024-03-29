import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContestView from '@/views/ContestView.vue'
import LoginView from '@/views/LoginView.vue'
import mainContainer from '@/containers/mainContainer.vue'
import ResponseView from '@/views/ResponseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: mainContainer,
      meta: { bodyClass: '' },
      children: [
        {
          path: '/home',
          name: 'home.index',
          component: HomeView,
          meta: {
            auth: true
          }
        },
        {
          path: '/contest/:id',
          name: 'contest',
          component: ContestView,
          meta: {
            auth: true
          }
        },
        {
          path: '/results/:id',
          name: 'results',
          component: ResponseView,
          meta: {
            auth: true
          }
        },
        {
          path: '/results/:id',
          name: 'results',
          component: ResponseView
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView,
          meta: {
            auth: false
          }
        }
      ]
    }
  ]
})

export default router
