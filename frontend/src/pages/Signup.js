import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { SIGNUP } from '../services/auth'
import handleAsync from '../utils'
import '../index.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
}

class Signup extends Component {
  state = {
    msg: null,
    loading: false,
  }

  onFinish = async (values) => {
    this.setState({ loading: true })
    const response = await handleAsync(() => SIGNUP(values))

    if (response.err) {
      this.setState({ msg: 'A user with the given email is already registered' })
    } else {
      this.setState({ msg: 'response.message' })
      this.props.history.push('/login')
    }
    this.setState({ loading: false })
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div className="signup-container">
        <br />
        <h1 style={{ textAlign: 'Center', fontSize: 30 }}>Sign up</h1>

        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Enter a valid email address',
              },
              { required: true, message: 'Enter an email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('The two passwords that you entered do not match!')
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" block htmlType="submit" style={{ backgroundColor: '#faad14' }}>
              Sign up
            </Button>
            <br />
            <br />
            Already have an account ?
            <a style={{ color: '#faad14' }} href="/login">
              Log in
            </a>
          </Form.Item>
        </Form>
        <div className="message-container">
          {!this.state.loading && <p>{this.state.msg}</p>}
          {this.state.loading && <p>Loading...</p>}
        </div>
      </div>
    )
  }
}

export default Signup
