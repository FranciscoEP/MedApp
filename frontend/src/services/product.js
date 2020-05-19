import axios from 'axios'

const baseURL = 'http://localhost:3000/'

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
  SHOW_PRODUCT: async (productId) => {
    return await service.get(`/product/${productId}`)
  },
  EDIT_PRODUCT: async ({ productId, product }) => {
    return await service.patch(`/product/edit/${productId}`, product)
  },
  DELETE_PRODUCT: async (productId) => {
    return await service.delete(`/product/${productId}`, productId)
  },
}

export default PRODUCT_SERVICE
