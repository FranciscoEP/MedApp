import React, { Component } from 'react'
import ProductForm from '../components/ProductForm'
import PRODUCT_SERVICE from '../services/product'
import '../index.css'

export class CreateProduct extends Component {
  state = { imgUrl: '' }

  setImgURL = (imgURL) => {
    this.setState({
      imgURL,
    })
  }

  onChange = (info) => {
    if (info.file.status !== 'uploading') {
      this.setImgURL(info.file.response.secure_url)
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`)
    }
  }

  onFinish = async (product) => {
    const { imgURL } = this.state
    await PRODUCT_SERVICE.ADD_PRODUCT({ ...product, imgURL })
    this.props.history.push('/product')
  }

  render() {
    return (
      <div>
        <h1>Add a new product</h1>
        <div>
          <ProductForm
            title="Equipment Information"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            setImgURL={this.setImgURL}
            img={this.state.ImgURL}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default CreateProduct
