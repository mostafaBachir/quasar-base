import { api } from './api'

export async function login(email, password) {
  return api.post('/login/', { email, password })
}

export async function refreshToken(refresh) {
  return api.post('/refresh/', { refresh })
}

export async function getProfile() {
  return api.get('/me/')
}
export async function register({ first_name, last_name, email, password }) {
  return api.post('/register', {
    first_name,
    last_name,
    email,
    password,
  })
}
