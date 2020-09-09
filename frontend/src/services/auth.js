import axios from 'axios'

const baseURL = 'https://immense-journey-87400.herokuapp.com'
// const baseURL = 'http://localhost:3000/'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

const AUTH_SERVICE = {
  SIGNUP: async (data) => {
    return await service.post('/auth/signup', data)
  },
  LOGIN: async (data) => {
    return await service.post('/auth/login', data)
  },
  LOGOUT: async () => {
    return await service.get('/auth/logout')
  },
  CURRENT_USER: async () => {
    return await service.get('/auth/currentUser')
  },
}

export default AUTH_SERVICE
