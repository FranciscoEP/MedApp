import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Card, Descriptions } from 'antd'
import { MyContext } from '../context'
import PROFILE_SERVICE from '../services/profile'

const { Meta } = Card

export default class Profile extends Component {
  state: {
    profile: '',
  }

  render() {
    return (
      <MyContext.Consumer>
        {({ loggedUser }) =>
          !loggedUser ? (
            <>loading</>
          ) : (
            <>
              <>
                <div className="profile-container">
                  <h1 style={{ textAlign: 'center' }}>Welcome {this.context.loggedUser.name}</h1>
                  <Card
                    hoverable
                    style={{
                      maxWidth: 200,
                      minWidth: 200,
                      minHeight: 200,
                      minWidth: 200,
                      backgroundColor: '#00474f',
                      border: 'none',
                      color: '#FFF',
                    }}
                    cover={<img alt="example" src={this.context.loggedUser.imgURL} />}
                  ></Card>
                  <div style={{ textAlign: 'center', fontSize: '2em' }}>
                    <Descriptions title="Information">
                      <Descriptions.Item label="Email">
                        {this.context.loggedUser.email}
                      </Descriptions.Item>
                      <Descriptions.Item label="Mobile">
                        {this.context.loggedUser.address}
                      </Descriptions.Item>
                      <Descriptions.Item label="Address">
                        {this.context.loggedUser.mobile}
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      size="middle"
                      block
                      style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
                    >
                      <Link to="/profile/edit">Edit profile</Link>
                    </Button>
                  </div>
                </div>
              </>
            </>
          )
        }
      </MyContext.Consumer>
    )
  }
}

Profile.contextType = MyContext
