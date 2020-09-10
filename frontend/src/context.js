import React, { createContext, Component } from 'react'
import { CURRENT_USER, LOGOUT } from './services/auth'
import handleAsync from './utils'
export const MyContext = createContext()

export default class MyProvider extends Component {
  state = {
    loggedUser: null,
    loading: true,
  }

  async componentDidMount() {
    const response = await handleAsync(CURRENT_USER)
    this.logUser(response.user)
    this.setState({ loading: false })
  }

  logUser = (user) => {
    this.setState({ loggedUser: user })
  }

  logout = async () => {
    await LOGOUT()
    this.setState({
      loggedUser: null,
    })
  }

  render() {
    const { loggedUser, loading } = this.state
    const { logUser, logout } = this

    return (
      <MyContext.Provider value={{ loggedUser, logUser, logout, loading }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
