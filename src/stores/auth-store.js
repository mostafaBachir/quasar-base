import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { api } from '../services/api'
import { jwtDecode } from 'jwt-decode'
import { login, refreshToken, getProfile } from '../services/auth'

export const use_auth_store = defineStore('auth_store', {
  state: () => ({
    access: null,
    refresh: null,
    user: {
      email: '',
      nom: '',
      prenom: '',
      is_staff: false,
      is_superuser: false,
    },
  }),

  getters: {
    isAuthenticated: (state) => !!state.access,
    isTokenExpired: (state) => {
      if (!state.access) return true
      try {
        const { exp } = jwtDecode(state.access)
        return exp * 1000 < Date.now()
      } catch {
        return true
      }
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
      },
    ],
  },

  actions: {
    async login(email, password) {
      try {
        const { data } = await login(email, password)
        this.access = data.access
        this.refresh = data.refresh
        this.setAuthHeader()
        await this.fetchUser()
        this.notify('Connexion réussie', 'positive')
        return true
      } catch (error) {
        console.log(error)
        this.notify('Email ou mot de passe invalide', 'negative')
        return false
      }
    },

    async fetchUser() {
      try {
        const { data } = await getProfile()
        this.user = {
          email: data.email,
          nom: data.last_name,
          prenom: data.first_name,
          is_staff: data.is_staff,
          is_superuser: data.is_superuser,
        }
      } catch {
        this.logout()
      }
    },

    async refreshToken() {
      if (!this.refresh) return false
      try {
        const { data } = await refreshToken(this.refresh)
        this.access = data.access
        this.setAuthHeader()
        return true
      } catch {
        this.logout()
        return false
      }
    },

    async checkAndRefresh() {
      if (this.isTokenExpired) {
        return await this.refreshToken()
      }
      return true
    },

    logout(router = null) {
      this.access = null
      this.refresh = null
      this.user = {
        email: '',
        nom: '',
        prenom: '',
        is_staff: false,
        is_superuser: false,
      }
      this.setAuthHeader()
      this.notify('Déconnexion réussie', 'info')
      if (router) router.push('/auth/login')
    },

    setAuthHeader() {
      api.defaults.headers.common['Authorization'] = this.access ? `Bearer ${this.access}` : null
    },
    async initializeAuth() {
      if (this.access) {
        this.setAuthHeader()
        await this.checkAndRefresh()
      }
    },

    notify(message, type = 'positive') {
      Notify.create({ type, color: type, message, position: 'bottom', progress: true })
    },
  },
})
