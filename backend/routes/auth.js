const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/User')

router.post('/signup', (req, res, next) => {
  const { name, email, password } = req.body
  User.register(
    {
      name,
      email,
    },
    password
  )
    .then((user) => {
      req.logIn(user, (err) => {
        if (err) return res.status(500).send({ message: err.message })
        res.status(200).send(user)
      })
    })
    .catch((err) => res.status(500).send({ message: err.message }))
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (!user)
      return res
        .status(404)
        .send({ message: 'This user does not exist, or the password is incorrect.' })
    req.logIn(user, (err) => {
      if (err) return res.status(500).send({ message: err.message })
      res.status(200).send(user)
    })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).json({ message: 'logged out' })
})

router.get('/currentUser', (req, res) => {
  res.status(200).json({ user: req.user })
})
module.exports = router
