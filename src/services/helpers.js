// src/services/helpers.js
export function injectRefreshInterceptor(apiInstance, store, router) {
  apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        try {
          const refreshed = await store.refreshToken()
          if (refreshed) {
            originalRequest.headers.Authorization = `Bearer ${store.access}`
            return apiInstance(originalRequest)
          }
        } catch {
          store.logout(router)
        }
      }

      return Promise.reject(error)
    },
  )
}
