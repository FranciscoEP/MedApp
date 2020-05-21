import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MyContext } from '../context'
import { Spin } from 'antd'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <MyContext.Consumer>
    {({ loggedUser, loading }) => (
      <Route
        {...rest}
        render={(props) =>
          !loading ? (
            loggedUser ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            <div>
              <Spin />
            </div>
          )
        }
      />
    )}
  </MyContext.Consumer>
)

export default PrivateRoute
