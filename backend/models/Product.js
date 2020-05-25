const { model, Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: String,
    imgURL: String,
    description: { type: String, max: 200 },
    plan: { type: String, enum: ['per day', 'per week', 'per month'] },
    pricing: String,
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
