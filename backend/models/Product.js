const { model, Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    pricing: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

module.exports = model('Product', productSchema)
