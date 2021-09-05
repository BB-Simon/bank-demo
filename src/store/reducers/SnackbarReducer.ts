import { SnackbarActionTypes } from "../actions-types";
import {
  SnackbarStateTypes,
  SnackbarAction,
  Severity,
} from "../actions/SnackbarActionsTypes";

const initialState = {
  isOpen: false,
  message: null,
  severity: null,
};

const snackbarReducer = (
  state: SnackbarStateTypes = initialState,
  action: SnackbarAction
) => {
  switch (action.type) {
    case SnackbarActionTypes.SUCCESS:
      return {
        ...state,
        isOpen: true,
        message: action.payload,
        severity: Severity.SUCCESS
      };
    case SnackbarActionTypes.ERROR:
      return {
        ...state,
        isOpen: true,
        message: action.payload,
        severity: Severity.ERROR
      };
    case SnackbarActionTypes.CLOSE:
      return {
        ...state,
        isOpen: false,
        message: null,
        severity: null
      };
    default:
      return state;
  }
};

export default snackbarReducer;
