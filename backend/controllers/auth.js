const passport = require('passport')
const User = require('../models/User')

exports.signup = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.register(
    {
      name,
      email,
    },
    password
  )

  res.status(201).json({ user, msg: 'User created' })
}

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ err, info })
    if (!user) return res.status(401).json({ err: { ...info } })
    req.login(user, (error) => {
      if (error) return res.status(401).json({ error })
      return res.status(200).json({ user })
    })
  })(req, res, next)
}

/*(req,res)=>{
   (req, res, next) => {
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
}*/

exports.logout = (req, res) => {
  req.logout()
  res.status(200).json({ msg: 'logged out' })
}

exports.currentUser = (req, res) => {
  res.status(200).json({ user: req.user })
}
