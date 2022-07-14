import { useState, useEffect } from 'react';
import { Bank, BankAccount, Transaction } from './models/transactions';
import AccountCard from './components/AccountCard';

function App() {
  const [banks, setBanks] = useState([] as Bank[]);

  useEffect(() => {
    // TODO: API URL should be in an environment variable
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => setBanks(data.banks));
  }, [])

  const transactionList = (transactions: Transaction[]) => {
    return transactions.map(transaction => {
      return (
        <div>
          {transaction.date} - { transaction.amount }
        </div>
      );
      }
    );

  };

  const accountSummary = (account: BankAccount) => {
    return (
      <div key={account.id}>
        {account.accountName}
        {transactionList(account.transactions)}
      </div>
    );
  }

  const bankAccounts = (bank: Bank) => {
    return bank
      .bankAccounts
      .map(account => <AccountCard account={account} />);
  };

  const bankCards = banks.map((bank) => {
    return (
      <div className="border rounded p-3">
        <h2 className="text-lg">
          {bank.bankName + ' '}
          <span className="italic text-sm">
            {bank.bankAccounts.length} Accounts
          </span>
        </h2>
        <p className="italic">{bank.address.state}</p>
        {bankAccounts(bank)}
      </div>
    );
  });

  return (
    <div className="App p-6">
      <header className="App-header py-3 text-right">
        Neo interview
      </header>
      <div>
        <h1 className="font-semibold p-3">Banks</h1>
        {bankCards}
      </div>
    </div>
  );
}

export default App;
