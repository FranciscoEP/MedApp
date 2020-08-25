import axios from 'axios'

const baseURL = 'http://immense-journey-87400.herokuapp.com'

// const baseURL = 'http://localhost:3000/'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

const PROFILE_SERVICE = {
  PROFILE_UPDATE: async (data) => {
    return await service.put('/profile/edit', data)
  },
}

export default PROFILE_SERVICE
