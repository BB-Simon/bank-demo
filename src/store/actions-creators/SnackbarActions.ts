import { Dispatch } from "redux";
import { SnackbarActionTypes } from "../actions-types";
import { SnackbarAction } from "../actions/SnackbarActionsTypes";

export const setSuccess = (message:string) => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActionTypes.SUCCESS,
      payload: message,
    });
  };
};
export const setError = (message:string) => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActionTypes.ERROR,
      payload: message,
    });
  };
};

export const closeSnackbar = () => {
  return (dispatch: Dispatch<SnackbarAction>) => {
    dispatch({
      type: SnackbarActionTypes.CLOSE
    });
  };
};
