const mongoose = require('mongoose');

let schemaOptions = {
   versionKey: false
};

let recipeSchema = new mongoose.Schema(
   {
      title: { type: String, required: true }
   },
   schemaOptions
);

module.exports = mongoose.model('Recipe', recipeSchema);
