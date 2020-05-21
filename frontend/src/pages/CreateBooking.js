import React, { Component } from 'react'
import BookingForm from '../components/BookingForm'
import BOOKING_SERVICE from '../services/booking'
import '../index.css'

export class CreateProduct extends Component {
  state = {}

  onFinish = async (values) => {
    const idProd = this.props.match.params.id
    const response = await BOOKING_SERVICE.ADD_BOOKING(values, idProd)
    console.log(response)
    this.props.history.push('/profile')
  }

  render() {
    return (
      <div>
        <h1>Book your equipment</h1>
        <div>
          <BookingForm title="Equipment Information" onFinish={this.onFinish} />
        </div>
      </div>
    )
  }
}

export default CreateProduct
