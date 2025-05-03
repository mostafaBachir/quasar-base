import { api } from './api'

export async function login(email, password) {
  return api.post('/accounts/login/', { email, password })
}

export async function refreshToken(refresh) {
  return api.post('/accounts/refresh/', { refresh })
}

export async function getProfile() {
  return api.get('/accounts/me/')
}
