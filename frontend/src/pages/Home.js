import React, { Component } from 'react'
import '../index.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { Row, Col, Divider } from 'antd'

const { Title } = Typography

class Home extends Component {
  render() {
    return (
      <div className="background-img">
        <div>
          <Title strong style={{ color: '#e6fffb', fontSize: 100, padding: 25 }}>
            Struggle to find medical equipment?
          </Title>
          <Row justify="left">
            <Col span={16}>
              <div style={{ paddingLeft: 20 }}>
                <h2>Join our community and earn by helping others</h2>
                <br />
                <br />

                <h3>
                  <strong>Loan</strong> and
                  <strong> rent</strong> Medical Equipment easy and fast.
                  <br />
                  <br />
                  For rent: Search your item, book and contact your loaner.
                  <br />
                  For Loan: Add your product and wait to be booked.
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <Row justify="center">
          <Col span={5}>
            <div style={{ width: '300px', display: 'flex', alignContent: 'center' }}>
              <Button
                type="primary"
                block
                size="large"
                style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
              >
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
