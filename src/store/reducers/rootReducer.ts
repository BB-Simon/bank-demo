import {combineReducers} from 'redux'
import BankReducer from './BankReducer'

const rootReducer = combineReducers({
    bank: BankReducer
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
