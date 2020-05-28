import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BOOKING_SERVICE from '../services/booking'
import '../index.css'
import { Button, Form, message } from 'antd'

class DetailBooking extends Component {
  state = { equipment: '' }

  componentDidMount = async () => {
    const { data } = await BOOKING_SERVICE.SHOW_BOOKING(this.props.match.params.id)
    const { booking } = data
    const { equipment } = data.booking
    this.setState({ equipment, booking })
  }
  onFinish = async () => {
    const { id } = this.props.match.params
    await BOOKING_SERVICE.SET_BOOKING(id)
    await BOOKING_SERVICE.DELETE_BOOKING(id)
    this.returnBookingSuccess()
    this.props.history.push('/bookings')
  }

  returnBookingSuccess = () => {
    message.success(
      'Thank you for using Loan for life, the product was returned and is now on the catalogue'
    )
  }

  render() {
    return (
      <>
        <Form onFinish={this.onFinish}>
          <main className="container">
            <div className="wrapper">
              <div className="box">
                <div>
                  <img className="image" src={this.state.equipment.imgURL} alt="" />
                </div>
                <div className="text">
                  <h1>Equipment's name: {this.state.equipment.name}</h1>
                  <h4>Contact info</h4>
                  <h5>Owned by: {this.state.equipment.owner?.name}</h5>
                  <h5>Email: {this.state.equipment.owner?.email}</h5>
                  <h5>Mobile: {this.state.equipment.owner?.mobile}</h5>
                  <hr></hr>
                  <p>Description: {this.state.equipment.description}</p>
                  <span>
                    Price: {`${this.state.equipment.pricing} ${this.state.equipment.plan}`}
                    <sup>$</sup>
                  </span>
                  <div className="buttons">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                      style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
                      onFinish={this.onFinish}
                    >
                      <>Return Equipment</>
                    </Button>

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
                      <Link to={`/bookings`}>Go Back</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Form>
      </>
    )
  }
}

export default DetailBooking
