const Booking = require('../models/Booking')
const Product = require('../models/Product')

exports.bookingAdd = async (req, res) => {
  const data = req.body
  data.equipment = req.params.id
  data.client = req.user._id
  const booking = await Booking.create({
    ...data,
  })
  res.status(201).json({ booking })
}

exports.bookingGet = async (req, res) => {
  const { id } = req.params
  const equipmentId = await Product.findById(id)
  const equipment = await Product.findByIdAndUpdate(
    id,
    { $set: { isActive: !equipmentId.isActive } },
    { new: true }
  )
  res.status(201).json({ equipment })
}

exports.bookingGet = async (req, res) => {
  const { id } = req.params
  const equipmentId = await Product.findById(id)
  const equipment = await Product.findByIdAndUpdate(
    id,
    { $set: { isActive: !equipmentId.isActive } },
    { new: true }
  )
  res.status(201).json({ equipment })
}

exports.bookingRelease = async (req, res) => {
  const { id } = req.params
  const booking = await Booking.findById(id)
    .populate('equipment')
    .populate({ path: 'equipment', model: 'Product' })

  const { equipment } = booking
  const { _id } = equipment

  const { isActive } = equipment

  const response = await Product.findByIdAndUpdate(
    _id,
    { $set: { isActive: !isActive } },
    { new: true }
  )
    .populate('equipment')
    .populate({ path: 'equipment', model: 'Product' })

  res.status(201).json({ response })
}

exports.bookings = async (req, res) => {
  const client = req.user._id
  const bookings = await Booking.find({ client })
    .populate('owner')
    .populate('equipment')
    .populate({ path: 'equipment', populate: { path: 'owner', model: 'User' } })
  res.status(200).json({ bookings })
}

exports.booking = async (req, res) => {
  const booking = await Booking.findById(req.params.id)
    .populate('owner')
    .populate('equipment')
    .populate({ path: 'equipment', populate: { path: 'owner', model: 'User' } })
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
