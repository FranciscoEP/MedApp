const User = require('../models/User')

exports.profileUpdate = async (req, res) => {
  const profile = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { ...req.body } },
    { new: true }
  )
  res.status(200).json({ profile })
}
