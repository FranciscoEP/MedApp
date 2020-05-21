const express = require('express')
const router = express.Router()

const { isLogged } = require('../middlewares/catchErrors.js')

const { profileUpdate } = require('../controllers/profile')
router.patch('/edit', isLogged, profileUpdate)

const { newProfile } = require('../controllers/profile')
router.patch('/edit', isLogged, profileUpdate)

module.exports = router
