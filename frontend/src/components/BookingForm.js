import React from 'react'
import { Form, Input, Button } from 'antd'

import { Link } from 'react-router-dom'
import { MyContext } from '../context'

function BookingForm({ onFinish }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  }

  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          initialValues={{ address: loggedUser.address }}
        >
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input your Address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: 'Please input your mobile!' }]}
          >
            <Input />
          </Form.Item>
          <div>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: '#faad14', borderColor: '#faad14', margin: 60 }}
              >
                Submit
              </Button>
              <Button
                type="primary"
                size="middle"
                style={{ backgroundColor: '#faad14', borderColor: '#faad14', margin: 60 }}
              >
                <Link to="/product">Go back</Link>
              </Button>
            </Form.Item>
          </div>
        </Form>
      )}
    </MyContext.Consumer>
  )
}

export default BookingForm
