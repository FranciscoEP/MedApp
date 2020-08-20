import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { MyContext } from '../context'
import '../index.css'

const gridStyle = {
  width: '100%',
  height: 5,
  textAlign: 'center',
  backgroundColor: '#00474f',
  fontSize: 10,
  border: 'none',
}

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
                      maxWidth: 250,
                      minWidth: 250,
                      minHeight: 100,
                      maxHeight: 100,
                      border: 'none',
                      color: '#FFF',
                    }}
                    cover={
                      <img
                        alt="example"
                        src={this.context.loggedUser.imgURL}
                        style={{ minWidth: 250, maxWidth: 250, minHeight: 280, maxHeight: 280 }}
                      />
                    }
                  >
                    <Card.Grid style={gridStyle}>
                      {`Email: ${this.context.loggedUser.email}`}
                    </Card.Grid>
                    <Card.Grid
                      style={gridStyle}
                    >{`Mobile: ${this.context.loggedUser.mobile}`}</Card.Grid>
                    <Card.Grid
                      style={gridStyle}
                    >{`Address: ${this.context.loggedUser.address}`}</Card.Grid>
                    <p>{this.context.loggedUser.catchPhrase}</p>
                    <div>
                      <Button
                        position="absolute"
                        type="primary"
                        size="middle"
                        block
                        style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
                      >
                        <Link to="/profile/edit">Edit profile</Link>
                      </Button>
                    </div>
                  </Card>
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
