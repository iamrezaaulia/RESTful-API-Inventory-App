
const modelProducts = require('../models/product')

module.exports = {
    getProducts: (req, res) => {
        modelProducts.getProducts(req, res)
            .then(result => result.length > 0 
            ? res.json({
                status: 200,
                error: false,
                message: 'Successfully get all products',
                data: result
            }) : res.json({
                status: 404,
                error: true,
                data: [],
                message: 'Product Not Found !'
            }))
            .catch(err => console.log(err))
    },

    insertProduct: (req, res) => {
        const data = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            categories_id: req.body.categories_id,
            quantity: req.body.quantity,
            created_at: new Date(),
            updated_at: new Date(),
        }

        modelProducts.insertProduct(data)
            .then(result => res.json({
                status: 201,
                error: false,
                message: 'Successfully Add Data',
                data: req.body
            }))
            .catch(err => console.log(err))
    },

    getProductById: (req, res) => {
        modelProducts.getProductById(req.params.id)
            .then(result => res.json({
                status: 200,
                error: false,
                message: 'Successfully get product with id: ' + req.params.id,
                data: result
            }))
            .catch(err => console.log(err))
    },

    updateProduct: (req, res) => {
        const data = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            categories_id: req.body.categories_id,
            quantity: req.body.quantity,
            updated_at: new Date(),
        }

        modelProducts.updateProduct(req.params.id, data)
            .then(result => res.json({
                status: 200,
                error: false,
                message: 'Successfully update product with id: ' + req.params.id,
                data: req.body
            }))
            .catch(err => console.log(err))
    },

    addReduceProduct: (req, res) => {
        const data = {
            action: req.params.action,
            qty: req.params.qty
        }

        modelProducts.addReduceProduct(req.params.id, data)
            .then(result => result.affectedRows == 1
                ? res.json({
                    status: 200,
                    error: false,
                    message: 'Successfully ' + data.action + ' product with id: ' + req.params.id,
                }) : res.json({
                    status: 400,
                    error: true,
                    message: 'Data product cannot be reduced more than 0 !'
                }))
                .catch(err => console.log(err))
    },

    deleteProduct: (req, res) => {
        modelProducts.deleteProduct(req.params.id)
            .then(result => res.json({
                status: 200,
                error: false,
                message: 'Successfully delete product with id: ' + req.params.id
            }))
            .catch(err => console.log(err))
    }
}