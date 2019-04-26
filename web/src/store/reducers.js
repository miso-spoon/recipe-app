import { combineReducers } from "redux";
import * as Actions from "./actions";

const accounts = (state = {}, action) => {
  switch (action.type) {
    case Actions.ALL_ACCOUNTS_ACTION:
      let accounts = action.payload;
      return state.concat(accounts);
    default:
      return state;
  }
};

const account = (state = {}, action) => {
  switch (action.type) {
    case Actions.ACCOUNT_ACTION:
      return Object.assign({}, state, action.payload);
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
  account,
  accounts,
  toast
});
