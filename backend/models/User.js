const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    address: String,
    mobile: String,
    catchPhrase: String,

    imgURL: String,
  },
  { timestamps: true }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
