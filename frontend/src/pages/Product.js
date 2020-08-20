import React, { Component } from 'react'
import PRODUCT_SERVICE from '../services/product'
import ProductCard from '../components/ProductCard'
import '../index.css'
import { message } from 'antd'

class Product extends Component {
  state = {
    getProducts: [],
  }

  componentDidMount = async () => {
    const response = await PRODUCT_SERVICE.SHOW_PRODUCTS()
    const { getProducts } = response.data
    this.setState({
      getProducts,
    })
  }

  deleteProduct = async (id) => {
    await PRODUCT_SERVICE.DELETE_PRODUCT(id)
    const { getProducts } = this.state
    const newArray = getProducts.filter((product) => product._id !== id)
    this.setState({ getProducts: newArray })
    this.deleteSuccess()
  }

  deleteSuccess = () => {
    message.success('Your equipment was deleted successfully')
  }

  render() {
    return (
      <>
        <div className="product-card">
          {this.state.getProducts.map((product) => (
            <ProductCard deleteProduct={this.deleteProduct} {...product} key={product._id} />
          ))}
        </div>
      </>
    )
  }
}

export default Product
