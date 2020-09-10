import React from 'react'
import { Form, Input, Button, Upload, InputNumber } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function ProfileForm({ onFinish, onChange }) {
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
    // action: 'https://immense-journey-87400.herokuapp.com/product/upload',
  }

  return (
    <div className="prof-form">
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>

        <Form.Item label="Favorite Quote" name="catchPhrase">
          <Input />
        </Form.Item>

        <Form.Item label="Mobile" name="mobile">
          <InputNumber style={{ width: 320 }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Upload {...props} onChange={onChange}>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ backgroundColor: '#faad14', borderColor: '#faad14', margin: 60 }}
          >
            Submit
          </Button>

          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: '#faad14', borderColor: '#faad14', margin: 60 }}
          >
            <Link to="/profile">Go back</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProfileForm
