import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context'
import PRODUCT_SERVICE from '../services/product'
import '../index.css'
import { Button } from 'antd'

class DetailProduct extends Component {
  state = { product: '' }

  componentDidMount = async () => {
    const response = await PRODUCT_SERVICE.SHOW_PRODUCT(this.props.match.params.id)
    const { product } = response.data
    this.setState({ product })
  }

  render() {
    return (
      <MyContext.Consumer>
        {({ loggedUser }) => (
          <>
            <main className="container">
              <div className="wrapper">
                <div className="box">
                  <div>
                    <img className="image" src={this.state.product.imgURL} alt="" />
                  </div>
                  <div className="text">
                    <h1>Equipment's name: {this.state.product.name}</h1>
                    <h5>Owned by: {this.state.product.owner?.name}</h5>
                    <hr></hr>
                    <p>Description: {this.state.product.description}</p>
                    <span>
                      Price: {`${this.state.product?.pricing} ${this.state.product?.plan}`}
                      <sup>$</sup>
                    </span>
                    <div className="buttons">
                      {this.state.product.owner?.email !== loggedUser?.email ? (
                        <Button
                          type="primary"
                          size="large"
                          block
                          style={{
                            backgroundColor: '#faad14',
                            borderColor: '#faad14',
                            marginBottom: 10,
                          }}
                        >
                          <Link to={`/booking/add/${this.props.match.params.id}`}>Order</Link>
                        </Button>
                      ) : null}
                      <Button
                        type="primary"
                        size="large"
                        block
                        style={{
                          backgroundColor: '#faad14',
                          borderColor: '#faad14',
                          marginTop: 10,
                        }}
                      >
                        <Link to={`/product`}>Go Back</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}

export default DetailProduct
