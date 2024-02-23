import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/authStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)


const authStore = useAuthStore()

authStore.check()
router.beforeEach(async (to, from, next) => {
  // Handle authentication and guest routes
  if (authStore) {
    console.log('authStore.authenticated')
    console.log(authStore.authenticated)
    if (to.matched.some(m => m.meta.auth) && !authStore.authenticated) {
      /*
             * If the user is not authenticated and visits
             * a page that requires authentication, redirect to the login page
             */
      return next({
        name: 'login',
        query: { redirect: to.path }
      })
    }
  }

  // Signal that the navigation can proceed
  next()
})


app.mount('#app')
