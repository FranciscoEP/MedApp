import axios from 'axios'

const baseURL = 'https://med-app-iota.now.sh'

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
