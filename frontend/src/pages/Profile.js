import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { MyContext } from '../context'

export default class Profile extends Component {
  render() {
    return (
      // <MyContext.Consumer>
      //   {({ loggedUser }) => (
      <>
        <div className="profile-container">
          <h1 style={{ textAlign: 'center' }}>Welcome {this.context.loggedUser.name}</h1>
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
      // )}
      // </MyContext.Consumer>
    )
  }
}

Profile.contextType = MyContext
