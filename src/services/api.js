// src/services/api.js
import axios from 'axios'

const BASE_URL = import.meta.env.BASE_API_URL || 'http://127.0.0.1:8000/api'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export { api, BASE_URL }
