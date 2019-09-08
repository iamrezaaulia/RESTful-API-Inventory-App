const router = require('express').Router();

const CategoriesController = require('../controllers/categories')

router
    .get('/', CategoriesController.getCategories)
    .post('/', CategoriesController.insertCategory)
    .get('/:id', CategoriesController.getCategoryById)
    .patch('/:id/update', CategoriesController.updateCategory)
    .delete('/delete/:id', CategoriesController.deleteCategory)

module.exports = router