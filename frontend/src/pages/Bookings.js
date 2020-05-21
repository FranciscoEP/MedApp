import React, { Component } from 'react'
import BOOKING_SERVICE from '../services/booking'
import BookingCard from '../components/BookingCard'
import '../index.css'

class Bookings extends Component {
  state = {
    bookings: [],
  }
  componentDidMount = async () => {
    const response = await BOOKING_SERVICE.SHOW_BOOKINGS({})
    const bookings = response.data.bookings

    this.setState({
      bookings,
    })
  }

  // deleteProduct = async (id) => {
  //   await PRODUCT_SERVICE.DELETE_PRODUCT(id)
  //   const { products } = this.state
  //   const newArray = products.filter((product) => product._id !== id)
  //   this.setState({ products: newArray })
  // }

  render() {
    return (
      <>
        <div className="product-card">
          {this.state.bookings.map((booking) => (
            <BookingCard {...booking} key={booking._id} />
          ))}
        </div>
      </>
    )
  }
}

export default Bookings
