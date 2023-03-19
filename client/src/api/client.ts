import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
