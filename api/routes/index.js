var express = require('express');
var router = express.Router();
var RecipeRouter = require('./Recipe');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.send('Hey, get outta here!');
});

router.use('/recipes', RecipeRouter);

module.exports = router;
