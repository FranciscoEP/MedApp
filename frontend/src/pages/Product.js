import React, { Component } from 'react'
import PRODUCT_SERVICE from '../services/product'
import ProductCard from '../components/ProductCard'

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
  render() {
    console.log(this.state.products)
    return (
      <>
        {this.state.products.map((product) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </>
    )
  }
}

export default Product
