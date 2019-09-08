const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products')
const verifyJWT = require('../helpers/helpers')

router
    .get('/', ProductsController.getProducts)
    .post('/', verifyJWT.verifyToken, ProductsController.insertProduct)
    .get('/:id', ProductsController.getProductById)
    .patch('/:id/update/:action/:qty', verifyJWT.verifyToken, ProductsController.addReduceProduct)
    .put('/update/:id', verifyJWT.verifyToken, ProductsController.updateProduct)
    .delete('/delete/:id', verifyJWT.verifyToken, ProductsController.deleteProduct)
    
module.exports = router