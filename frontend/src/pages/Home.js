import React, { Component } from 'react'
import '../index.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="background-img">
        {/* <h1 style={{ fontSize: '3em' }}>
          Hard times needs professional, medical equipment and expertise come home for continued
          compassionate care. Buy and rent Medical Equipment so your loved ones can stay in the
          comfort of home with the best equipment right by their side.
        </h1> */}
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
