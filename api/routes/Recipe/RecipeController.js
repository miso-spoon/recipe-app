const BaseController = require('../../base/BaseController');
const Recipe = require('../../models/Recipe');

class RecipeController extends BaseController {
   constructor() {
      let Model = Recipe;
      let options = { Model: Model };

      super(options);
   }
}

module.exports = RecipeController;
