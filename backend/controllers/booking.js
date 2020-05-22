const Booking = require('../models/Booking')

exports.bookingAdd = async (req, res) => {
  const data = req.body
  data.equipment = req.params.id
  data.client = req.user._id

  const booking = await Booking.create({
    ...data,
  })
  res.status(201).json({ booking })
}

exports.bookings = async (req, res) => {
  const client = req.user._id
  const bookings = await Booking.find({ client }).populate('equipment')
  res.status(200).json({ bookings })
}

exports.booking = async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate('equipment').populate('client')
  res.status(200).json({ booking })
}

exports.bookingEdit = async (req, res) => {
  console.log(req.params)
  const { id } = req.params
  const booking = await Booking.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
  res.status(200).json({ booking })
}

exports.bookingDelete = async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id)
  res.status(200).json({ booking })
}
