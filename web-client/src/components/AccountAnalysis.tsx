import React, { useState } from 'react';
import { BankAccount } from '../models/transactions';
import StatementSummary from './StatementSummary';
import StatementAnalysis from './StatementAnalysis';
import TransactionList from './TransactionList';
import AdditionalDetails from './AdditionalDetails';

type OpenTab =
  'statementSummary' |
  'statementAnalysis' |
  'transactions' |
  'additionDetails';

const AccountAnalysis: React.FC<{account: BankAccount}> = (props) => {
  const { account } = props;

  const [openTab, setOpenTab] = useState('statementSummary' as OpenTab);

  const statementSummary = () => {
    return openTab === 'statementSummary' ?
      <StatementSummary account={account} /> : null;
  };

  const statementAnalysis = () => {
    return openTab === 'statementAnalysis' ?
      <StatementAnalysis account={account} />: null;
  };

  const transactions = () => {
    return openTab === 'transactions' ?
      <TransactionList transactions={account.transactions} /> : null;
  };

  const additionDetails = () => {
    return openTab === 'additionDetails' ?
      <AdditionalDetails account={account} /> : null;
  };

  const tabButtonClasses = "border border-2 border-blue-500 text-blue-500 font-semibold px-2";
  const openTabButtonClasses = "bg-blue-500 text-white border-2 border-blue-500 font-semibold px-2";

  return (
    <div className="border rounded-lg p-3 my-3">
      <button 
        onClick={() => setOpenTab('statementSummary')}
        className={ openTab === 'statementSummary' ? openTabButtonClasses : tabButtonClasses }
      >
        Statement summary
      </button>

      <button 
        onClick={() => setOpenTab('statementAnalysis')}
        className={ openTab === 'statementAnalysis' ? openTabButtonClasses : tabButtonClasses }
      >
        Statement analysis
      </button>

      <button 
        onClick={() => setOpenTab('transactions')}
        className={ openTab === 'transactions' ? openTabButtonClasses : tabButtonClasses }
      >
        Transactions
      </button>

      <button
        onClick={() => setOpenTab('additionDetails')}
        className={ openTab === 'additionDetails' ? openTabButtonClasses : tabButtonClasses }
      >
        Additional
      </button>


      {statementSummary()}
      {statementAnalysis()}
      {transactions()}
      {additionDetails()}
    </div>
  );
};

export default AccountAnalysis;
