const Product = require('../models/Product')

exports.addProduct = async (req, res) => {
  const products = await Product.create({ ...req.body })
  res.status(201).json({ products })
}

exports.viewProducts = async (req, res) => {
  const getProducts = await Product.find({}).populate('owner')
  res.status(200).json({ getProducts })
}

exports.viewProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('owner')
  res.status(200).json({ product })
}

exports.editProduct = async (req, res) => {
  const { name, image, description } = req.body
  const { id } = req.params
  const update = await Product.findByIdAndUpdate(
    id,
    { $set: { name, image, description } },
    { new: true }
  )
  res.status(200).json({ update })
}

exports.deleteProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({ deleteProduct })
}
