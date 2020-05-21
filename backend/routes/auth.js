const express = require('express')
const router = express.Router()

const { catchErrors, isLogged } = require('../middlewares/catchErrors')
const { signup, login, logout, currentUser } = require('../controllers/auth')
const passport = require('passport')
const User = require('../models/User')

router.post('/signup', catchErrors(signup))

router.post('/login', login)

router.get('/logout', logout)

router.get('/currentUser', isLogged, currentUser)
module.exports = router
