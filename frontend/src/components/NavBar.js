import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../index.css'
import { MyContext } from '../context'
import { Layout, Menu } from 'antd'
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'

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
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/"></Link>Home
                  </Menu.Item>

                  <Menu.Item key="2">
                    <Link to="/signup"></Link>Sign up
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/login"></Link>Login
                  </Menu.Item>

                  <SubMenu title="Products" key="4">
                    <Menu.Item key="setting:1">
                      <Link to="/product"></Link>View Products
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                      <Link to="/product/add"></Link>Promote a new product
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu icon={<UserOutlined />} title="Profile" key="5">
                    <Menu.Item key="setting:1">
                      <Link to="/profile"></Link>View Profile
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                      <Link to="/profile/edit"></Link>Edit Profile
                    </Menu.Item>
                    <Menu.Item key="setting:3" icon={<LogoutOutlined />} onClick={logout}>
                      Log out
                    </Menu.Item>
                  </SubMenu>
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

// export class NavBar extends Component {
//   state = {
//     collapsed: false,
//   }

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     })
//   }
//   render() {
//     return (
//       <MyContext.Consumer>
//         {({ loggedUser, logout }) => (
//           <Layout className="Layout">
//             <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//               <div className="logo" />
//               <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
//                 <Menu.Item key="1" icon={<UserOutlined />}>
//                   <Link to="/">Home</Link>
//                 </Menu.Item>
//                 <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//                   <Link to="/about">About us</Link>
//                 </Menu.Item>
//                 <Menu.Item key="3" icon={<UploadOutlined />}>
//                   <Link to="/signup">Sign up</Link>
//                 </Menu.Item>
//                 <Menu.Item key="4" icon={<UploadOutlined />}>
//                   <Link to="/login">Log in</Link>
//                 </Menu.Item>
//                 <Menu.Item key="5" icon={<UploadOutlined />}>
//                   <Link to="/profile">Profile</Link>
//                 </Menu.Item>
//                 <Menu.Item key="6" icon={<LogoutOutlined />} onClick={logout}>
//                   Logout
//                 </Menu.Item>
//               </Menu>
//             </Sider>
//             <Layout className="site-layout">
//               <Header className="site-layout-background" style={{ padding: 0 }}>
//                 {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                   className: 'trigger',
//                   onClick: this.toggle,
//                 })}
//               </Header>
//               <Content
//                 className="site-layout-background"
//                 style={{
//                   margin: '24px 16px',
//                   padding: 24,
//                   minHeight: 280,
//                 }}
//               >
//                 <div>{this.props.children}</div>
//               </Content>
//               <Footer style={{ textAlign: 'center', fontStyle: 'bold' }}>
//                 By Francisco at Ironhack |
//               </Footer>
//             </Layout>
//           </Layout>
//         )}
//       </MyContext.Consumer>
//     )
//   }
// }
