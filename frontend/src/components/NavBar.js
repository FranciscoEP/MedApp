import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../index.css'
import { MyContext } from '../context'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  UserAddOutlined,
  LoginOutlined,
  BoldOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu

export class NavBar extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
      <div className="layout-container">
        <MyContext.Consumer>
          {({ loggedUser, logout }) => (
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  theme="dark"
                  mode="horizontal"
                >
                  <Menu.Item key="mail" icon={<HomeOutlined />}>
                    <Link to="/"></Link>Home
                  </Menu.Item>

                  {!loggedUser?.email && (
                    <Menu.Item key="1" icon={<UserAddOutlined />}>
                      <Link to="/signup"></Link>Sign up
                    </Menu.Item>
                  )}

                  {!loggedUser?.email && (
                    <Menu.Item key="2" icon={<LoginOutlined />}>
                      <Link to="/login"></Link>Log in
                    </Menu.Item>
                  )}

                  {loggedUser?.email && (
                    <SubMenu icon={<SettingOutlined />} title="Product">
                      <Menu.ItemGroup title=" ">
                        <Menu.Item key="setting:1">
                          <Link to="/product"></Link>Catalogue
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                          <Link to="/product/add"></Link>Rent your product
                        </Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                  )}

                  {loggedUser?.email && (
                    <SubMenu icon={<UserOutlined />} title="Profile">
                      <Menu.ItemGroup title=" ">
                        <Menu.Item key="setting:1">
                          <Link to="/profile"></Link>My Profile
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                          <Link to="/profile/edit"></Link>Edit my profile
                        </Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                  )}

                  {loggedUser?.email && (
                    <SubMenu icon={<BoldOutlined />} title="Booking">
                      <Menu.ItemGroup title=" ">
                        <Menu.Item key="setting:1">
                          <Link to="/bookings"></Link>Booking
                        </Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                  )}

                  {loggedUser?.email && (
                    <Menu.Item key="5" icon={<LogoutOutlined />} onClick={logout}>
                      Log out
                    </Menu.Item>
                  )}
                </Menu>
              </Header>
              <Content>
                <div className="site-layout-content">
                  <>{this.props.children}</>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center', background: '#001529', color: 'whitesmoke' }}>
                Ironhack ©2020 Created by Francisco Ep
              </Footer>
            </Layout>
          )}
        </MyContext.Consumer>
        ,
      </div>
    )
  }
}
NavBar.contextType = MyContext

export default withRouter(NavBar)
