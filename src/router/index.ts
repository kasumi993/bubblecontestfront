import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContestView from '@/views/ContestView.vue'
import LoginView from '@/views/LoginView.vue'
import mainContainer from '@/containers/mainContainer.vue'

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
          component: ContestView
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        }
      ]
    }
  ]
})

export default router
