import React from 'react'
import { Form, Input, Button } from 'antd'

function ProductForm({ onFinish, onFinishFailed }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  }

  return (
    <Form {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label="pricing" name="pricing">
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
