import React, { Component } from 'react'
import BookingForm from '../components/BookingForm'
import BOOKING_SERVICE from '../services/booking'
import { message } from 'antd'
import '../index.css'

export class EditBooking extends Component {
  state = { booking: '' }

  componentDidMount = async () => {
    const response = await BOOKING_SERVICE.SHOW_BOOKING(this.props.match.params.id)
    const { booking } = response.data
    this.setState({ booking })
  }

  onFinish = async (booking) => {
    const { id } = this.props.match.params
    await BOOKING_SERVICE.EDIT_BOOKING(id, { ...booking })
    this.editSuccess()
    this.props.history.push('/bookings')
  }

  editSuccess = () => {
    message.success(`Your booking was updated successfully`)
  }

  render() {
    return (
      <div>
        <div className="addForm">
          <h1>Edit Booking</h1>
          <BookingForm title="Booking" onFinish={this.onFinish} />
        </div>
      </div>
    )
  }
}

export default EditBooking
