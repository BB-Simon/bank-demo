import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionTypes } from "../actions-types";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    });
  };
};
export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BANKRUPT,
    });
  };
};
