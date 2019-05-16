const routes = require('express').Router();
const RecipeController = require('./RecipeController');
const wrapAsync = require('../../utils/utils').wrapAsync;
const logRoutes = require('../../utils/logging').logRoutes;

let Controller = new RecipeController();

/* GET */
routes.get('/', wrapAsync(Controller.getAll));
routes.get('/:id', wrapAsync(Controller.getById));
/* PUT */
routes.put('/:id', wrapAsync(Controller.update));
/* POST */
routes.post('/create', wrapAsync(Controller.create));
/* DELETE */
routes.delete('/:id', wrapAsync(Controller.remove));

logRoutes('/recipes', routes);

module.exports = routes;
