import axios from 'axios'
import { auth_store } from 'stores/auth-store'
import { BASE_API_URL } from './api'

const upload = axios.create({
  baseURL: BASE_API_URL,
  timeout: 120000,
})

upload.interceptors.request.use(async (config) => {
  const store = auth_store()
  if (store.access) {
    await store.checkAndRefresh()
    config.headers.Authorization = `Bearer ${store.access}`
  }

  return config
})

export default upload
