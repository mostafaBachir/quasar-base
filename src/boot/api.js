// src/boot/api.js
import { boot } from 'quasar/wrappers'
import { api } from '../services/api'
import { injectRefreshInterceptor } from '../services/helpers'
import { use_auth_store } from '../stores/auth-store'
import router from 'src/router'

export default boot(() => {
  const store = use_auth_store()
  store.setAuthHeader() // Appliquer le token s’il existe déjà
  injectRefreshInterceptor(api, store, router)
})
