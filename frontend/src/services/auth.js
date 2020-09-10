import axios from 'axios'

const baseURL = 'https://immense-journey-87400.herokuapp.com/auth'
// const baseURL = 'http://localhost:3000/'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

export const SIGNUP = async (data) => {
  return await service.post('/signup', data)
}
export const LOGIN = async (data) => {
  return await service.post('/login', data)
}
export const LOGOUT = async () => {
  return await service.get('/logout')
}
export const CURRENT_USER = async () => {
  return await service.get('/currentUser')
}
