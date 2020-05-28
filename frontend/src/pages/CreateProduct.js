import React, { Component } from 'react'
import ProductForm from '../components/ProductForm'
import PRODUCT_SERVICE from '../services/product'
import { message } from 'antd'
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
    this.addProdSuccess()
    this.props.history.push('/product')
  }

  addProdSuccess = () => {
    message.success('Equipment created')
  }

  render() {
    return (
      <div>
        <div className="addForm">
          <h1>Add a new product</h1>
          <ProductForm
            title="Equipment Information"
            onFinish={this.onFinish}
            setImgURL={this.setImgURL}
            img={this.state.ImgURL}
            onChange={this.onChange}
            disableUpdate={this.disableUpdate}
          />
        </div>
      </div>
    )
  }
}

export default CreateProduct
