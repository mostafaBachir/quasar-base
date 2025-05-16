import { api } from './api'

export async function login(email, password) {
  return api.post('/auth/login/', { email, password })
}

export async function refreshToken(refresh) {
  return api.post('/auth/refresh/', { refresh })
}

export async function getProfile() {
  return api.get('/auth/me/')
}
export async function register({ first_name, last_name, email, password }) {
  return api.post('/auth/register', {
    first_name,
    last_name,
    email,
    password,
  })
}
