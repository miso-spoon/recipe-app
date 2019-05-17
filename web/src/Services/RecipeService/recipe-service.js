import { BaseService } from "../BaseService";
import ROUTES from "../../constants/routes";

class RecipeService extends BaseService {
  constructor() {
    super(ROUTES.recipe.base_route);
  }
}

export default new RecipeService();
