import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionsCreator, State} from './store';

function App() {
  const dispatch = useDispatch()
  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionsCreator, dispatch);
  const amount = useSelector((state:State) => state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=> depositMoney(1000)}>Deposit</button>
      <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
      <button onClick={()=> bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
