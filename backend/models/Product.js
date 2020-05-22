const { model, Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: String,
    imgURL: String,
    description: String,
    dutyUse: String,
    warranty: String,
    weight: String,
    pricing: String,
    ownerEmail: String,
    ownerMobile: String,
    ownerName: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Product', productSchema)
