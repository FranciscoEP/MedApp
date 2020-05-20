import React, { Component } from 'react'
import PRODUCT_SERVICE from '../services/product'
import ProductCard from '../components/ProductCard'
import '../index.css'

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
    // console.log(response)
    // console.log(response.data)
  }

  deleteProduct = async (id) => {
    await PRODUCT_SERVICE.DELETE_PRODUCT(id)
    const { products } = this.state
    console.log(products)
    const deleted = products.filter((prod) => prod._id !== prod)
    console.log(deleted)
    this.setState({ products: deleted })
    this.props.history.push('/product')
    console.log(products)
  }

  render() {
    return (
      <>
        <div className="product-card">
          {this.state.products.map((product) => (
            <ProductCard
              deleteProduct={() => this.deleteProduct(product._id)}
              {...product}
              key={product._id}
            />
          ))}
        </div>
      </>
    )
  }
}

export default Product
