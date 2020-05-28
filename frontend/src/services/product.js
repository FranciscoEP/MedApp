import axios from 'axios'

const baseURL = 'https://med-app-iota.now.sh'
const service = axios.create({
  baseURL,
  withCredentials: true,
})

const PRODUCT_SERVICE = {
  ADD_PRODUCT: async (product) => {
    return await service.post('/product/add', product)
  },
  SHOW_PRODUCTS: async () => {
    return await service.get('/product/show')
  },
  SHOW_PRODUCT: async (id) => {
    return await service.get(`/product/${id}`)
  },
  EDIT_PRODUCT: async (id, product) => {
    return await service.patch(`/product/edit/${id}`, product)
  },
  DELETE_PRODUCT: async (id) => {
    return await service.delete(`/product/${id}`)
  },
}

export default PRODUCT_SERVICE
