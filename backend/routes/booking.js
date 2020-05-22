const express = require('express')
const router = express.Router()

const { booking, bookingAdd, bookings, bookingEdit } = require('../controllers/booking')

router.post('/create/:id', bookingAdd)

// // Read
router.get('/show', bookings)
router.get('/:id', booking)

// //Update
router.patch('/edit/:id', bookingEdit)

// //Delete
// router.delete('/:id', bookingDelete)

module.exports = router
