import React from 'react';
import positiveIcon from '../images/up-arrow-alt-regular-24.png';
import negativeIcon from '../images/down-arrow-alt-regular-24.png';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h2>Histórico de Transações</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount >= 0 ? 'positive' : 'negative'}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={transaction.amount >= 0 ? positiveIcon : negativeIcon}
              alt={transaction.amount >= 0 ? 'Entrada' : 'Saída'}
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            {transaction.description}: R${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
