import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Upload, Tooltip, Select } from 'antd'
import { UploadOutlined, QuestionCircleOutlined } from '@ant-design/icons'
const { TextArea } = Input
const { Option } = Select

function ProductForm({ onFinish, onChange, disableUpdate }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  }

  const props = {
    name: 'imageURL',
    // action: 'http://localhost:3000/product/upload',
    action: 'https://immense-joy-87400.herokuapp.com/product/upload',
  }

  return (
    <Form {...layout} name="basic" onFinish={onFinish}>
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
        rules={[{ required: true, message: 'Input a description 250 characters max!', max: 250 }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="pricing"
        label={
          <span>
            Pricing
            <Tooltip title="Be reasonable you're not pretending to be rich from this app">
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
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name="plan"
        label="Plan"
        hasFeedback
        rules={[{ required: true, message: 'Select a pricing plan' }]}
      >
        <Select placeholder="Please select your rent schema">
          <Option value="per day">Daily</Option>
          <Option value="per week">Weekly</Option>
          <Option value="per month">Monthly</Option>
        </Select>
      </Form.Item>

      <Form.Item
        {...tailLayout}
        rules={[
          {
            required: true,
            message: `Please submit your medical equipment photo!`,
            whitespace: true,
          },
        ]}
      >
        <Upload {...props} onChange={onChange}>
          <Button>
            <UploadOutlined />
            Click to Upload
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

        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: '#faad14', borderColor: '#faad14', margin: 60 }}
        >
          <Link to="/product">Go back</Link>
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
