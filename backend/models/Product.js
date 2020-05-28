const { model, Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: String,
    imgURL: {
      type: String,
      default:
        'https://res.cloudinary.com/pakilloep/image/upload/v1590550352/MedApp/blue-simple-avatar_xiq6uu.png',
    },
    description: { type: String, max: 200 },
    plan: { type: String, enum: ['per day', 'per week', 'per month'] },
    pricing: Number,
    isActive: { type: Boolean, default: true },
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
