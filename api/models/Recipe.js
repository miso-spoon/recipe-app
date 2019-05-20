const mongoose = require('mongoose');

let schemaOptions = {
   versionKey: false
};

let recipeSchema = new mongoose.Schema(
   {
      title: { type: String, required: true },
      cook_time: { type: String },
      difficulty: { type: String },
      servings: { type: String },
      calories: { type: String },
      ingredients: { type: [String], required: true },
      instructions: { type: [String], required: true }
   },
   schemaOptions
);

module.exports = mongoose.model('Recipe', recipeSchema);
