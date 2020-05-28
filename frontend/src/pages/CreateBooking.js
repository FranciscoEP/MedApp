import React, { Component } from 'react'
import BookingForm from '../components/BookingForm'
import BOOKING_SERVICE from '../services/booking'
import '../index.css'
import { message } from 'antd'

export class CreateBooking extends Component {
  state = {}

  onFinish = async (values) => {
    const { id } = this.props.match.params
    await BOOKING_SERVICE.ADD_BOOKING(values, id)
    await BOOKING_SERVICE.GET_BOOKING(id)
    this.addBookingSuccess()
    this.props.history.push('/profile')
  }

  addBookingSuccess = () => {
    message.success('Your booking was created successfully')
  }

  render() {
    return (
      <div className="addForm">
        <h1 style={{ color: 'white' }}>Book your equipment</h1>
        <div>
          <BookingForm title="Equipment Information" onFinish={this.onFinish} />
        </div>
      </div>
    )
  }
}

export default CreateBooking
