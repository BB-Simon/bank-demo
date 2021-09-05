import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, actionsCreator} from '../store';

const BankDemo:FC = () => {
    const dispatch = useDispatch()
  // this the way to dispatch a store
  // const handleDepositMoney = (amount:number) => {
  //   dispatch(depositMoney(amount))
  // }

  // this is a more syntactically convenient way to dispatch a store 
  //  if you would want to call the action directly.
  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionsCreator, dispatch);
  
  const amount = useSelector((state:State) => state.bank)
    return (
        <div>
            <h1>{amount}</h1>
            {/* <button onClick={()=> handleDepositMoney(1000)}>Deposit</button> */}
            <button onClick={()=> depositMoney(1000)}>Deposit</button>
            <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
            <button onClick={()=> bankrupt()}>Bankrupt</button>
        </div>
    );
};

export default BankDemo;