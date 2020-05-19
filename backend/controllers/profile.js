const User = require('../models/User')

exports.profileUpdate = async (req, res) => {
  const newProfile = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { ...req.body } },
    { new: true }
  )
  res.status(200).json({ newProfile })
}
// exports.editProduct = async (req, res) => {
//   const { name, image, description } = req.body
//   const { id } = req.params
//   const update = await Product.findByIdAndUpdate(
//     id,
//     { $set: { name, image, description } },
//     { new: true }
//   )
//   res.status(200).json({ update })
// }
