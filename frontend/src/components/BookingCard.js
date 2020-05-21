import React from 'react'
import { Card } from 'antd'
import { MyContext } from '../context'
import { Link } from 'react-router-dom'
import '../index.css'

const BookingCard = ({ address, initialDate, finalDate, equipment, _id }) => {
  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <>
          <Card title={equipment.name} style={{ width: 300 }}>
            <p>{address}</p>
            <p>{initialDate}</p>
            <p>{finalDate}</p>
          </Card>
          <Link to={`/bookings/${_id}`}>More information</Link>
        </>
      )}
    </MyContext.Consumer>
  )
}
BookingCard.contextType = MyContext
// extra={<a href="#">More</a>}
export default BookingCard
