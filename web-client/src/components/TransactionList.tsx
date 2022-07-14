import React from 'react';
import { Transaction } from '../models/transactions';

const TransactionList: React.FC<{transactions: Transaction[]}> = (props) => {
  const { transactions } = props;

  const rows = transactions.map(transaction => {
    return (
      <tr key={transaction.transactionHash}>
        <td>{transaction.date}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default TransactionList;
