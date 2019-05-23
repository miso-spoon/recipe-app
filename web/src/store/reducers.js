import { combineReducers } from "redux";
import * as Actions from "./actions";

const recipes = (state = [], action) => {
  switch (action.type) {
    case Actions.GET_ALL_RECIPES_ACTION:
      let recipes = action.payload;
      return [].concat(recipes);
    default:
      return state;
  }
};

const toast = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  recipes,
  toast
});
