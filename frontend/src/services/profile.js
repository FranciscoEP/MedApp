import axios from 'axios'

const baseURL = 'https://immense-journey-87400.herokuapp.com'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

const PROFILE_SERVICE = {
  PROFILE_UPDATE: async (data) => {
    return await service.patch('/profile/edit', data)
  },
}

export default PROFILE_SERVICE
