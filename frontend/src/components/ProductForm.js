import React from 'react'

import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { TextArea } = Input

function ProductForm({ onFinish, onFinishFailed, onChange }) {
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
    <Form {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Pricing" name="pricing">
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Upload {...props} onChange={onChange}>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
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
