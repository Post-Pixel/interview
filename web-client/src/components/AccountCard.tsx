import React, { useState } from 'react';
import { BankAccount } from '../models/transactions';
import TransactionList from './TransactionList';

const AccountCard: React.FC<{account: BankAccount}> = (props) => {
  const { account } = props;
  const [showTransactions, setShowTransacitons] = useState(false);

  const transactionsList = () => {
    return showTransactions ?
      <TransactionList transactions={account.transactions} /> : null;
  };

  const toggleTransactionsButton = (bottom: boolean) => {
    if (!showTransactions && bottom) { return null; }

    return (
      <button
        onClick={() => setShowTransacitons(!showTransactions)}
        className="border border-blue-500 border-2 rounded px-2 font-semibold text-blue-500 mt-3"
      >
        {showTransactions ? 'Hide transactions' : 'Show transactions'}
      </button>
    );
  };

  return (
    <div className="border p-2 my-3 rounded-lg">
      <h3 className="text-lg">
        {account.accountName}
        <span className="border rounded border-gray-500 text-gray-500 p-1 mx-2 text-sm uppercase font-semibold">
          {account.accountType}
        </span>
      </h3>

      <p className="mb-2">
        <span className="font-bold text-lg">
          ${account.currentBalance}
        </span>
        <br />
        <span className="text-gray-500 font-semibold">
          ${account.availableBalance} available
        </span>
      </p>

      <p>
        {account.accountHolder}
        <span className="border rounded border-gray-500 text-gray-500 p-1 mx-2 text-sm uppercase font-semibold">
          {account.accountHolderType}
        </span>
      </p>
      <p className="text-gray-500">
        BSB: {account.bsb}
      </p>

      {toggleTransactionsButton(false)}
      {transactionsList()}
      {toggleTransactionsButton(true)}

    </div>
  );
};

export default AccountCard;
