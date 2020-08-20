import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import '../index.css'
import { Row, Col, Divider } from 'antd'

const BookingCard = ({ _id, deleteBooking, equipment }) => {
  return (
    <>
      <Divider type="vertical" style={{ color: '#333', fontWeight: 'normal' }}>
        <Row gutter={[48, 16]}>
          <Col className="gutter-row" span={6}>
            <Card title="Reservation" style={{ width: 300, textAlign: 'center' }}>
              {/* <Link to={`/bookings/edit/${_id}`}>More</Link> */}
              {<Link to={`/bookings/${_id}`}>View More</Link>}
              <h4>Contact your loaner to set details for the equipment</h4>
              <p>{equipment.owner.name}</p>
              <p>{equipment.owner.email}</p>
            </Card>
          </Col>
        </Row>
      </Divider>
    </>
  )
}

export default BookingCard
