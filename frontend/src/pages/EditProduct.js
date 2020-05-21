import React, { Component } from 'react'
import ProductForm from '../components/ProductForm'
import PRODUCT_SERVICE from '../services/product'
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
    const product = response.data.product
    this.setState({ product })
  }

  onFinish = async (product) => {
    const { imgURL } = this.state
    const prodId = this.props.match.params.id
    await PRODUCT_SERVICE.EDIT_PRODUCT(prodId, { ...product, imgURL })
    this.props.history.push('/product')
  }

  render() {
    return (
      <div>
        <h1>Edit Product</h1>
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

export default EditProduct
