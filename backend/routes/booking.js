const express = require('express')
const router = express.Router()
const booking = require('../models/Booking')

const {
  bookingAdd,
  bookings,
  bookingView,
  bookingEdit,
  bookingDelete,
} = require('../controllers/booking')

router.post('/create', bookingAdd)

// Read
router.get('/show', bookings)
router.get('/:id', bookingView)

// //Update
router.patch('/edit/:id', bookingEdit)

//Delete
router.delete('/:id', bookingDelete)

module.exports = router
