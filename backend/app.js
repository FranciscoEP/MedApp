require('dotenv').config()

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const passport = require('./config/passport')
const mongoose = require('mongoose')
const session = require('express-session')

const dbconfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

const corsconfig = {
  origin: ['https://med-app-iota.now.sh', 'http://localhost:3001'],
  // origin: ['http://localhost:3001'],
  credentials: true,
  allowedHeader: ['Content-Type', 'X-Powered-By', 'Accept-Ranges', 'Connection'],
}

const sessionconfig = {
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
}

mongoose
  // .connect('mongodb://localhost/backend', dbconfig)
  .connect(process.env.DB, dbconfig)
  .then(() => console.log('Connected to Mongo!'))
  .catch((err) => console.error('Error connecting to Mongo', err))

const app = express()

app.use(cors(corsconfig))
app.use(session(sessionconfig))
app.use(passport.initialize())
app.use(passport.session())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.disable('x-powered-by')

const index = require('./routes/index')
const auth = require('./routes/auth')
const product = require('./routes/product')
const profile = require('./routes/profile')
const booking = require('./routes/booking')

app.use('/', index)
app.use('/auth', auth)
app.use('/product', product)
app.use('/profile', profile)
app.use('/booking', booking)

module.exports = app
