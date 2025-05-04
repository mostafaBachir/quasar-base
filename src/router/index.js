import { route } from 'quasar/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'
import { use_auth_store } from '../stores/auth-store'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  // ⛔ Auth Guard
  Router.beforeEach(async (to, from, next) => {
    const store = use_auth_store()

    // Initialise l'auth (pour refresh token si besoin)
    await store.initializeAuth()

    if (to.meta.requiresAuth && !store.isAuthenticated) {
      next({ path: '/auth/login' })
    } else {
      next()
    }
  })

  return Router
})
