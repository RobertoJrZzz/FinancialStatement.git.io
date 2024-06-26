import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionInput from './components/TransactionInput';
import TransactionHistory from './components/TransactionHistory';
import './App.css';
import { Titulo } from './styled/styled';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleTitleClick = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <Titulo onClick={handleTitleClick} style={{ cursor: 'pointer' }}>Balanço financeiro</Titulo>
      <Balance transactions={transactions} />
      <TransactionInput addTransaction={addTransaction} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
