import { SnackbarActionTypes } from "../actions-types";

export const enum Severity {
  SUCCESS = "success",
  ERROR = "error",
}

export interface SnackbarStateTypes {
    isOpen: boolean;
    message: string | null;
    severity: Severity | null;
}

interface SuccessAction {
    type: SnackbarActionTypes.SUCCESS;
    payload: string
}
interface ErrorAction {
    type: SnackbarActionTypes.ERROR;
    payload: string
}
interface CloseAction {
    type: SnackbarActionTypes.CLOSE;
}
export type SnackbarAction = SuccessAction | ErrorAction | CloseAction; 