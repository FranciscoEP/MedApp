import axios from 'axios'

const baseURL = 'https://immense-journey-87400.herokuapp.com/auth'
// const baseURL = 'http://localhost:3000/'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

const AUTH_SERVICE = {
  SIGNUP: async (data) => {
    return await service.post('/signup', data)
  },
  LOGIN: async (data) => {
    return await service.post('/login', data)
  },
  LOGOUT: async () => {
    return await service.get('/logout')
  },
  CURRENT_USER: async () => {
    return await service.get('/currentUser')
  },
}

export default AUTH_SERVICE
