export const GET_ALL_RECIPES_ACTION = "GetAllRecipesAction";

export function updateRecipes(recipes) {
  return {
    type: GET_ALL_RECIPES_ACTION,
    payload: recipes
  };
}
