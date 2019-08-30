
const modelCategories = require('../models/category')

module.exports = {
    getCategories: (req, res) => {
        modelCategories.getCategories(req, res)
            .then(result => result.length > 0 
                ? res.json({
                    status: 200,
                    error: false,
                    message: 'Successfully get all categories',
                    data: result
                }) : res.json({
                    status: 404,
                    error: true,
                    message: 'Category not found !'
            }))
            .catch(err => console.log(err))
    },

    insertCategory: (req, res) => {
        const data = {
            category: req.body.category,
            created_at: new Date(),
            updated_at: new Date(),
        }

        modelCategories.insertCategory(data)
            .then(result => res.json({
                status: 201,
                error: false,
                message: 'Successfully add category',
                data: req.body
            }))
            .catch(err => console.log(err))
    },

    getCategoryById: (req, res) => {
        modelCategories.getCategoryById(req.params.id)
            .then(result => res.json({
                status: 200,
                error: false,
                message: 'Successfully get category with id: ' + req.params.id,
                data: result
            }))
            .catch(err => console.log(err))
    },

    updateCategory: (req, res) => {
        const data = {
            category: req.body.category,
            updated_at: new Date(),
        }

        modelCategories.updateCategory(req.params.id, data)
            .then(result => res.json({
                status: 200,
                error: false,
                message: 'Successfully update category with id: ' + req.params.id,
                data: req.body
            }))
            .catch(err => console.log(err))
    },

    deleteCategory: (req, res) => {
        modelCategories.deleteCategory(req.params.id)
            .then(result => res.json({
                status: 200,
                error: false,
                message: 'Successfully delete product with id: ' + req.params.id
            }))
            .catch(err => console.log(err))
    }
}
