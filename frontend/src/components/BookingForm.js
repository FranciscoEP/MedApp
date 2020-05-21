import React from 'react'
import { Form, Input, Button } from 'antd'

import { Link } from 'react-router-dom'
import { MyContext } from '../context'

function BookingForm({ onFinish, onChange }) {
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
          >
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Initial Date" name="initialDate">
            <Input />
          </Form.Item>
          <Form.Item label="Final Date" name="finalDate">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" size="middle">
              <Link to="/">Go back</Link>
            </Button>
          </Form.Item>
        </Form>
      )}
    </MyContext.Consumer>
  )
}

BookingForm.contextType = MyContext
export default BookingForm
