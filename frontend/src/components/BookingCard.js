import React from 'react'
import { Card } from 'antd'
import { MyContext } from '../context'
import { Link } from 'react-router-dom'
import '../index.css'
import { Row, Col, Divider } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
const style = { background: '#0092ff', padding: '8px 0' }

const BookingCard = ({ address, mobile, _id, deleteBooking }) => {
  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <>
          <Divider type="vertical" style={{ color: '#333', fontWeight: 'normal' }}>
            <Row gutter={[48, 16]}>
              <Col className="gutter-row" span={6}>
                <Card
                  title="Reservation"
                  style={{ width: 300 }}
                  extra={<DeleteOutlined key="delete" onClick={() => deleteBooking(_id)} />}
                >
                  {/* <Link to={`/bookings/edit/${_id}`}>More</Link> */}
                  {<Link to={`/bookings/${_id}`}>View More</Link>}
                  <p>{`Address: ${address}`}</p>
                  <p>{`Mobile:  ${mobile}`}</p>
                </Card>
              </Col>
            </Row>
          </Divider>
        </>
      )}
    </MyContext.Consumer>
  )
}

export default BookingCard
