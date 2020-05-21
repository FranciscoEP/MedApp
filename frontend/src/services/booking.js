import axios from 'axios'

const baseURL = 'http://localhost:3000/'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

const BOOKING_SERVICE = {
  ADD_BOOKING: async (booking) => {
    return await service.post('/booking/add', booking)
  },
  SHOW_BOOKINGS: async () => {
    return await service.get('/booking/show')
  },
  SHOW_BOOKING: async (id) => {
    return await service.get(`/booking/${id}`)
  },
  EDIT_BOOKING: async (id, booking) => {
    return await service.patch(`/booking/edit/${id}`, booking)
  },
  DELETE_BOOKING: async (id) => {
    return await service.delete(`/booking/${id}`)
  },
}

export default BOOKING_SERVICE
