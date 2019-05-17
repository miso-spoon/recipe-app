export const UPDATE_RECIPES_ACTION = "UpdateRecipesAction";

export function updateRecipes(recipes) {
  return {
    type: UPDATE_RECIPES_ACTION,
    payload: recipes
  };
}
