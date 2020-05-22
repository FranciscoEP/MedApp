import React, { Component } from 'react'
import BookingForm from '../components/BookingForm'
import BOOKING_SERVICE from '../services/booking'
import '../index.css'

export class EditBooking extends Component {
  state = { booking: '' }

  componentDidMount = async () => {
    const response = await BOOKING_SERVICE.SHOW_BOOKING(this.props.match.params.id)

    const booking = response.data.booking

    this.setState({ booking })
  }

  onFinish = async (booking) => {
    const id = this.props.match.params.id

    const response = await BOOKING_SERVICE.EDIT_BOOKING(id, { ...booking })

    this.props.history.push('/bookings')
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