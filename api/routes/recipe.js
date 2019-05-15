var router = require('express').Router();
var recipeController = require('../controllers/recipeController');

router
    .route('/')
    .get(recipeController.findAll)
    .post(recipeController.create)

router
    .route('/:id')
    .get(recipeController.findById)
    .put(recipeController.update)
    .delete(recipeController.remove)

module.exports = router