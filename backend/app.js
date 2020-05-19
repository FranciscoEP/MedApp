require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const session = require('express-session')
const passport = require('./config/passport')
const cors = require('cors')

mongoose
  .connect('mongodb://localhost/backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
)

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001'],
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const index = require('./routes/index')
const auth = require('./routes/auth')
const product = require('./routes/product')
const profile = require('./routes/profile')
app.use('/', index)
app.use('/auth', auth)
app.use('/product', product)
app.use('/profile', profile)
module.exports = app
