import React, { Component } from 'react'
import '../index.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="background-img">
        <div className="site-button-ghost-wrapper">
          <Button type="primary" size="middle">
            <Link to="/about">About us</Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Home
