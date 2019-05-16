const express = require('express');
const router = express.Router();
const RecipeRouter = require('./Recipe');
const handleError = require('../utils/utils').handleError;

/* GET home page. */
router.get('/', function(req, res, next) {
   res.send('Hey, get outta here!');
});

router.use('/recipes', RecipeRouter);
router.use(handleError);

module.exports = router;
