import React from 'react';
import { Transaction } from '../models/transactions';

const TransactionList: React.FC<{transactions: Transaction[]}> = (props) => {
  const { transactions } = props;

  const transactionTypeChip = (type: string) => {
    if (type.length === 0) { return null; }

    return (
      <span className="border rounded text-gray-500 px-2 font-semibold">
        {type}
      </span>
    );
  };

  const rows = transactions.map(transaction => {
    return (
      <tr
        key={transaction.transactionHash}
        className="border-b odd:bg-gray-100 hover:font-semibold"
      >
        <td>{transaction.date}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.balance}</td>
        <td>{transaction.description}</td>
        <td>{transactionTypeChip(transaction.type)}</td>
      </tr>
    );
  });

  return (
    <div className="border rounded-lg p-3 my-2">
      <h3 className="font-bold text-lg">
        Transactions
      </h3>
      <table>
        <thead>
          <tr>
            <th className="w-48 text-left">Date</th>
            <th className="w-48 text-left">Amount</th>
            <th className="w-48 text-left">Balance</th>
            <th className="w-96 text-left">Description</th>
            <th className="w-48 text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
