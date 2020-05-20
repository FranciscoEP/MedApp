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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

module.exports = model('Product', productSchema)
