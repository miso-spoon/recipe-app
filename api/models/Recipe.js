const mongoose = require('mongoose');

let schemaOptions = {
   versionKey: false
};

let recipeSchema = new mongoose.Schema(
   {
      title: { type: String, required: true },
      cook_time: { type: Number },
      difficulty: { type: Number },
      servings: { type: Number },
      calories: { type: Number },
      cost: { type: Number },
      ingredients: { type: [String], required: true },
      instructions: { type: [String], required: true }
   },
   schemaOptions
);

module.exports = mongoose.model('Recipe', recipeSchema);
