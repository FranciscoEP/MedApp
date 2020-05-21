import React from 'react'
import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const { TextArea } = Input

function BookingForm({ onFinish, onFinishFailed, onChange }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  }

  const props = {
    name: 'imageURL',
    action: 'http://localhost:3000/product/upload',
  }

  return (
    <Form {...layout} name="basic" onFinish={onFinish}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>

      <Form.Item label="Mobile" name="mobile">
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" size="middle">
          <Link to="/profile">Go back</Link>
        </Button>
      </Form.Item>
    </Form>
  )
}

export default BookingForm
