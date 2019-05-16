const express = require('express');
const router = express.Router();
const RecipeRouter = require('./Recipe');
const log = require('../utils/logging').logger;

/* GET home page. */
router.get('/', function(req, res, next) {
   res.send('Hey, get outta here!');
});

router.use('/recipes', RecipeRouter);

module.exports = router;
