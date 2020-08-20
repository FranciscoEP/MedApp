const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    address: String,
    mobile: Number,
    catchPhrase: { type: String, max: 200 },
    imgURL: {
      type: String,
      default:
        'https://res.cloudinary.com/pakilloep/image/upload/v1590550352/MedApp/blue-simple-avatar_xiq6uu.png',
    },
  },
  { timestamps: true }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
