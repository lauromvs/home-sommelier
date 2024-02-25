import axios from 'axios'

const api = axios.create({
  baseURL: 'https://65db42dd3ea883a152916a1f.mockapi.io/api/v1',
  timeout: 10000,
})

export { api }
