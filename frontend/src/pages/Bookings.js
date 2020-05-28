import React, { Component } from 'react'
import BOOKING_SERVICE from '../services/booking'
import { message } from 'antd'
import BookingCard from '../components/BookingCard'
import '../index.css'

class Bookings extends Component {
  state = {
    bookings: [],
  }
  componentDidMount = async () => {
    const response = await BOOKING_SERVICE.SHOW_BOOKINGS({})
    const { bookings } = response.data
    this.setState({
      bookings,
    })
  }

  deleteBooking = async (id) => {
    await BOOKING_SERVICE.DELETE_BOOKING(id)
    const { bookings } = this.state
    const newArray = bookings.filter((booking) => booking._id !== id)
    this.setState({ bookings: newArray })
    this.deleteBookingSuccess()
  }

  deleteBookingSuccess = () => {
    message.success('Your booking was deleted successfully')
  }

  render() {
    return (
      <>
        <div className="product-card">
          {this.state.bookings.map((booking) => (
            <BookingCard deleteBooking={this.deleteBooking} {...booking} key={booking._id} />
          ))}
        </div>
      </>
    )
  }
}

export default Bookings
