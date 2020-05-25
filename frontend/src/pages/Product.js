import React, { Component } from 'react'
import PRODUCT_SERVICE from '../services/product'
import ProductCard from '../components/ProductCard'
import '../index.css'
import { message } from 'antd'

class Product extends Component {
  state = {
    products: [],
  }
  componentDidMount = async () => {
    const response = await PRODUCT_SERVICE.SHOW_PRODUCTS()
    const products = response.data.getProducts
    this.setState({
      products,
    })
  }
  //cuando mando a llamar a todos el render esto va en un map    -->if (products.valorRent === true)

  deleteProduct = async (id) => {
    await PRODUCT_SERVICE.DELETE_PRODUCT(id)
    const { products } = this.state
    const newArray = products.filter((product) => product._id !== id)
    this.setState({ products: newArray })
    this.deleteSuccess()
  }

  deleteSuccess = () => {
    message.success('Equipment deleted')
  }
  //
  render() {
    return (
      <>
        <div className="product-card">
          {this.state.products.map((product) => (
            <ProductCard deleteProduct={this.deleteProduct} {...product} key={product._id} />
          ))}
        </div>
      </>
    )
  }
}

export default Product
