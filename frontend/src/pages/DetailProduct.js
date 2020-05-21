import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PRODUCT_SERVICE from '../services/product'
import '../index.css'
import { Button } from 'antd'

class DetailProduct extends Component {
  state = { product: [] }

  componentDidMount = async () => {
    const response = await PRODUCT_SERVICE.SHOW_PRODUCT(this.props.match.params.id)
    const product = response.data.product
    this.setState({ product })
  }

  render() {
    return (
      <>
        <main className="container">
          <div className="left-column">
            <img className="active" src={this.state.product.imgURL} alt=",mnb" />
          </div>

          <div className="right-column">
            <div className="product-description">
              <span></span>
              <h1>{this.state.product.name}</h1>
              <p>{this.state.product.description}</p>
            </div>

            <div className="product-price">
              <span>
                <p>{this.state.product.pricing}$</p>
              </span>
              <br />
            </div>
            <Button type="primary" size="middle">
              <Link to={`/product/booking/${this.props.match.params.id}`}>Order</Link>
            </Button>
          </div>
        </main>
      </>
    )
  }
}

export default DetailProduct
