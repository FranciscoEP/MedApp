import React from 'react'
import { MyContext } from '../context'
import { Form, Input, Button, Upload, Tooltip } from 'antd'
import { UploadOutlined, QuestionCircleOutlined } from '@ant-design/icons'
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
      <Form.Item
        label="Product"
        name="name"
        rules={[{ required: true, message: 'Please input your product!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please a full description!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="pricing"
        placeholder="The price will be set per week. "
        label={
          <span>
            Pricing&nbsp;
            <Tooltip title="The price will be set in weeks">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input the prices for rent',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Set you price in weeks" />
      </Form.Item>

      <Form.Item
        label="Owner's Name"
        name="ownerName"
        rules={[{ required: true, message: 'Please input your Address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="ownerEmail"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mobile"
        name="ownerMobile"
        rules={[{ required: true, message: 'Please input your Mobile!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        {...tailLayout}
        rules={[{ required: true, message: `Please submit your medical equipment photo!` }]}
      >
        <Upload {...props} onChange={onChange}>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
