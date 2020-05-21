const Booking = require('../models/Booking')

exports.bookingAdd = async (req, res) => {
  const booking = await Booking.create({ ...req.body })
  res.status(201).json({ booking })
}

exports.bookings = async (req, res) => {
  const bookings = await Booking.find({}).populate('owner').populate('equipment')
  res.status(200).json({ bookings })
}

exports.bookingView = async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate('owner').populate('equipment')
  res.status(200).json({ booking })
}

exports.bookingEdit = async (req, res) => {
  const { id } = req.params
  const booking = await Booking.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
  res.status(200).json({ booking })
}

exports.bookingDelete = async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id)
  res.status(200).json({ booking })
}
