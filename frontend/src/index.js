import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import * as serviceWorker from './serviceWorker'

import './index.css'
import 'antd/dist/antd.css'

import MyProvider from './context'

ReactDOM.render(
  <MyProvider>
    <AppRouter />
  </MyProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
