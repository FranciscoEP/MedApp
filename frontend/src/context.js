import React, { createContext, Component } from 'react'
import AUTH_SERVICE from './services/auth'
import handleAsync from './utils'
export const MyContext = createContext()

export default class MyProvider extends Component {
  state = {
    loggedUser: null,
    loading: true,
  }

  async componentWillMount() {
    const response = await handleAsync(AUTH_SERVICE.CURRENT_USER)
    console.log(response)
    this.logUser(response.user)
    this.setState({ loading: false })
  }

  logUser = (user) => {
    this.setState({ loggedUser: user })
  }

  logout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.setState({
      loggedUser: null,
    })
  }

  render() {
    const { loggedUser, loading } = this.state
    const { logUser, logout } = this
    console.log(logUser)
    return (
      <MyContext.Provider value={{ loggedUser, logUser, logout, loading }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
