import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
import Home from './pages/Home'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} /> */}
    </Switch>
  </Router>
)

export default AppRouter
