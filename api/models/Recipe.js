var mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
   title: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
