import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { MyContext } from '../context'

const { Meta } = Card

export default class Profile extends Component {
  state: {
    profile: '',
  }

  render() {
    return (
      <MyContext.Consumer>
        {({ loggedUser }) => (
          <>
            <div className="profile-container">
              <h1 style={{ textAlign: 'center' }}>Welcome {this.context.loggedUser.name}</h1>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={this.context.loggedUser.imgURL} />}
              >
                <Meta title={this.context.loggedUser.address} />
              </Card>
              ,
              <Button type="primary" size="middle">
                <Link to="/profile/edit">Edit profile</Link>
              </Button>
              <Button type="primary" size="middle">
                <Link to="/bookings">Bookings</Link>
              </Button>
            </div>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}

Profile.contextType = MyContext
