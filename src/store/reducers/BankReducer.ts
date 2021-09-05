import { Action } from "../actions/BankActionsTypes";
import { ActionTypes } from "../actions-types";

const initialState = 100;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;
    case ActionTypes.WITHDRAW:
      return state - action.payload;
    case ActionTypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
