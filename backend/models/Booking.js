const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    equipment: { type: Schema.Types.ObjectId, ref: 'Product' },
    InitialDate: String,
    FinalDate: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking
