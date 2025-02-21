const express = require('express')
const router = express.Router();
const {getProducts,updatedProduct} = require('../controllers/productController');


router.get('/products',getProducts);
router.put('/products/:id',updatedProduct);

module.exports = router;