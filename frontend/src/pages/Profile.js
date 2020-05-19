import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default class Profile extends Component {
  render() {
    return (
      <>
        <div className="profile-container">
          <h1 style={{ textAlign: 'center' }}>Profile</h1>
          <br />
          <div className="user-card">
            <Avatar size={200} icon={<UserOutlined />} />
            <br />
            <Button type="primary" size="middle">
              <Link to="/profile/edit">Edit user</Link>
            </Button>
          </div>
        </div>
      </>
    )
  }
}
