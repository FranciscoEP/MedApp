import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Product from './pages/Product'
import CreateProduct from './pages/CreateProduct'
import ProfileUpdate from './pages/ProfileUpdate'
import PrivateRoute from './components/PrivateRoute'
import DetailProduct from './pages/DetailProduct'
import EditProduct from './pages/EditProduct'
import CreateBooking from './pages/CreateBooking'
import Bookings from './pages/Bookings'
import DetailBooking from './pages/DetailBooking'
import EditBooking from './pages/EditBooking'

const AppRouter = () => (
  <Router>
    <NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/edit" component={ProfileUpdate} />
        <PrivateRoute exact path="/product" component={Product} />
        <PrivateRoute exact path="/product/add" component={CreateProduct} />
        <PrivateRoute exact path="/product/:id" component={DetailProduct} />
        <PrivateRoute exact path="/product/edit/:id" component={EditProduct} />
        <PrivateRoute exact path="/booking/add/:id" component={CreateBooking} />
        <PrivateRoute exact path="/bookings/" component={Bookings} />
        <PrivateRoute exact path="/bookings/:id" component={DetailBooking} />
        <PrivateRoute exact path="/bookings/edit/:id" component={EditBooking} />
      </Switch>
    </NavBar>
  </Router>
)

export default AppRouter
