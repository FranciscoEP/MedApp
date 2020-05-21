import React, { Component } from 'react'
import PRODUCT_SERVICE from '../services/product'
import ProductCard from '../components/ProductCard'
import '../index.css'

class Product extends Component {
  state = {
    products: [],
    product: [],
  }
  componentDidMount = async () => {
    const response = await PRODUCT_SERVICE.SHOW_PRODUCTS()
    const products = response.data.getProducts
    this.setState({
      products,
    })
    // console.log(response)
    // console.log(response.data)
  }

  // deleteProduct = async (id) => {
  //   const response = await PRODUCT_SERVICE.DELETE_PRODUCT(id)
  //   console.log(response)
  //   const { products } = this.state
  //   console.log(products)
  //   const newArray = products.filter((product) => product._id !== product)
  //   console.log(newArray)
  // }

  deleteProduct = async (id) => {
    await PRODUCT_SERVICE.DELETE_PRODUCT(id)
    const { products } = this.state
    const newArray = products.filter((product) => product._id !== id)
    this.setState({ products: newArray })
  }

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
