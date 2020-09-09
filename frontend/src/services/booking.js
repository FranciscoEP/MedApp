import axios from 'axios'

const baseURL = 'https://immense-journey-87400.herokuapp.com'
// const baseURL = 'http://localhost:3000/'

const service = axios.create({
  baseURL,
  withCredentials: true,
})

const BOOKING_SERVICE = {
  ADD_BOOKING: async (booking, id) => {
    return await service.post(`/booking/create/${id}`, booking)
  },
  SHOW_BOOKINGS: async () => {
    return await service.get(`/booking/show`)
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
  GET_BOOKING: async (id) => {
    return await service.patch(`/booking/active/${id}`)
  },

  SET_BOOKING: async (id) => {
    return await service.patch(`/booking/sective/${id}`)
  },
}

export default BOOKING_SERVICE
