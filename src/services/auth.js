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
export async function register({ first_name, last_name, email, password }) {
  return api.post('/accounts/register/', {
    first_name,
    last_name,
    email,
    password,
  })
}
