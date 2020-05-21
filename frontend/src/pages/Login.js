import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../index.css'
import { MyContext } from '../context'
import AUTH_SERVICE from '../services/auth'
import handleAsync from '../utils'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { offset: 8, span: 8 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
}

class Login extends Component {
  state = {
    msg: null,
    loading: false,
  }

  onFinish = async (values) => {
    this.setState({ loading: true })
    const response = await handleAsync(() => AUTH_SERVICE.LOGIN(values))
    // console.log(response.user)
    if (response.err) {
      this.setState({ msg: 'Email or password incorrect.' })
      //this.setState({ msg: response.err.message })
    } else {
      this.setState({ msg: 'User logged' })
      this.context.logUser(response.user)
      this.props.history.push('/profile')
    }
    this.setState({ loading: false })
    this.setState({ login: { name: '', email: '', password: '' } })
  }

  handleLogin = (e) => {
    const { login } = this.state
    login[e.target.name] = e.target.value
    this.setState({ login })
  }

  render() {
    return (
      <>
        <br />
        <h1 style={{ textAlign: 'Center', fontSize: 30 }}>Log in</h1>
        <Form
          {...layout}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <br />
            <br />
            Don't have an account ? <a href="/signup">Sign up</a>
          </Form.Item>
        </Form>
        <div className="message-container">
          {!this.state.loading && <p>{this.state.msg}</p>}
          {this.state.loading && <p>Loading...</p>}
        </div>
      </>
    )
  }
}

Login.contextType = MyContext

export default Login
