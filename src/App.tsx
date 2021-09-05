import React, { FC } from 'react';
import './App.css';
import BankDemo from './components/BankDemo';
import Snackbar from './components/Snackbar';


const App:FC = ()=> {
  return (
    <div className="App">
      <BankDemo />
      <Snackbar />
    </div>
  );
}

export default App;
