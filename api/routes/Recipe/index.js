const routes = require('express').Router();
const RecipeController = require('./RecipeController');
const wrapAsync = require('../../utils/utils').wrapAsync;
const logRoutes = require('../../utils/logging').logRoutes;

let Controller = new RecipeController();

routes.get('/', wrapAsync(Controller.getAll));
routes.get('/:id', wrapAsync(Controller.getById));
routes.put('/:id', wrapAsync(Controller.update));
routes.delete('/:id', wrapAsync(Controller.remove));
routes.post('/create', wrapAsync(Controller.create));

logRoutes('/recipes', routes);

module.exports = routes;
