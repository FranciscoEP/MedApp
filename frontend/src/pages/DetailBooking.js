import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BOOKING_SERVICE from '../services/booking'
import '../index.css'
import { Button } from 'antd'
import { MyContext } from '../context'

class DetailBooking extends Component {
  state = { equipment: {} }

  componentDidMount = async () => {
    const { data } = await BOOKING_SERVICE.SHOW_BOOKING(this.props.match.params.id)

    const { equipment } = data.booking
    console.log(this.equipment)
    this.setState({ equipment })
  }

  render() {
    return (
      <main className="container">
        <div className="left-column">
          <img className="active" src={this.state.equipment.imgURL} alt=",mnb" />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span></span>
            <h1>{this.state.equipment.name}</h1>
            <p>{this.state.equipment.description}</p>
          </div>

          <div className="product-price">
            <span>
              <p>{this.state.equipment.pricing}$</p>
            </span>

            <br />
          </div>
          <Button type="primary" size="middle">
            <Link to="/bookings">Back</Link>
          </Button>
        </div>
      </main>
    )
  }
}

export default DetailBooking
