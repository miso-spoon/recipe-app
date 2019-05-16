var routes = require('express').Router();
var RecipeController = require('./RecipeController');
var wrapAsync = require("../../utils/utils").wrapAsync;

let Controller = new RecipeController()

routes.post("/create", wrapAsync(Controller.create))
routes.get("/", wrapAsync(Controller.getAll))
routes.get("/:id", wrapAsync(Controller.getById))
routes.delete("/:id", wrapAsync(Controller.remove))
routes.put("/:id", wrapAsync(Controller.update))

module.exports = routes