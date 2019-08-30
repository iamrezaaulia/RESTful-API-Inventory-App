const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products')

router
    .get('/', ProductsController.getProducts)
    .post('/', ProductsController.insertProduct)
    .get('/:id', ProductsController.getProductById)
    .patch('/:id/update/:action/:qty', ProductsController.addReduceProduct)
    .patch('/:id/update', ProductsController.updateProduct)
    .delete('/delete/:id', ProductsController.deleteProduct)
    
module.exports = router