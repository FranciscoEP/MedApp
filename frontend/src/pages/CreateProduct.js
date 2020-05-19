import React, { Component } from 'react'
// import { MyContext } from '../context'
import ProductForm from '../components/ProductForm'
import PRODUCT_SERVICE from '../services/product'

export class CreateProduct extends Component {
  state = {}

  onFinish = async (values) => {
    const response = await PRODUCT_SERVICE.ADD_PRODUCT(values)
    this.props.history.push('/product')
    console.log(response)
  }

  render() {
    return (
      <div>
        <h1>Add a new product</h1>
        <ProductForm
          title="Equipment Information"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        />
      </div>
    )
  }
}

export default CreateProduct
