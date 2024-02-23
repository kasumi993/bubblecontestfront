import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref(false)
  const token = ref('')
  const user = ref([])
  function authenticate() {
    authenticated.value = true
  }
  function check() {
    token.value = localStorage.getItem('id_token') as string
    authenticated.value = !!localStorage.getItem('id_token')
  }

  function login(tokenValue, userInfo) {
    token.value = tokenValue
    user.value = userInfo
    localStorage.setItem('id_token', tokenValue)
    authenticate()
  }

  function logout() {
    token.value = ''
    user.value = []
    localStorage.setItem('id_token', '')
    localStorage.removeItem('id_token')
    authenticated.value = false
  }

  return { authenticated, login, logout, check }
})
