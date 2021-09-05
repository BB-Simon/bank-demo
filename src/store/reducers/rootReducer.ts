import {combineReducers} from 'redux'
import BankReducer from './BankReducer'
import snackbarReducer from './SnackbarReducer'

const rootReducer = combineReducers({
    bank: BankReducer,
    snackbar: snackbarReducer
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
