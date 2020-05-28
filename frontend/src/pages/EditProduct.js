import React, { Component } from 'react'
import ProductForm from '../components/ProductForm'
import PRODUCT_SERVICE from '../services/product'
import { message } from 'antd'
import '../index.css'

export class EditProduct extends Component {
  state = { product: '', imgUrl: '' }

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

  componentDidMount = async () => {
    const response = await PRODUCT_SERVICE.SHOW_PRODUCT(this.props.match.params.id)
    const { product } = response.data
    this.setState({ product })
  }

  onFinish = async (product) => {
    const { imgURL } = this.state
    const { id } = this.props.match.params
    await PRODUCT_SERVICE.EDIT_PRODUCT(id, { ...product, imgURL })
    this.editSuccess()
    this.props.history.push('/product')
  }

  editSuccess = () => {
    message.success(`You're equipment was updated successfully`)
  }

  render() {
    return (
      <div>
        <div className="addForm">
          <h1>Edit Product</h1>
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

export default EditProduct
