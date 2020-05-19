const express = require('express')
const router = express.Router()
const uploadCloud = require('../config/cloudinary')

const {
  addProduct,
  viewProducts,
  viewProduct,
  editProduct,
  deleteProduct,
} = require('../controllers/product')

router.post('/add', addProduct)
router.get('/show', viewProducts)
router.get('/:id', viewProduct)
router.patch('/edit/:id', editProduct)
router.delete('/:id', deleteProduct)

router.post('/upload', uploadCloud.single('imageURL'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded'))
  }
  res.status(201).json({ secure_url: req.file.secure_url })
})
module.exports = router
