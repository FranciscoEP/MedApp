const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: 'User' },
    equipment: { type: Schema.Types.ObjectId, ref: 'Product' },
    address: String,
    initialDate: String,
    finalDate: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking
