import React from 'react';
import { BankAccount } from '../models/transactions';

const StatementSummary: React.FC<{account: BankAccount}> = (props) => {
  const { account } = props;
  const summary = account.statementSummary;

  return (
    <div className="my-3">
      <h3 className="font-semibold text-lg">
        Statement summary
      </h3>
      <table>
        <tr>
          <td className="w-64">Opening balance</td>
          <td>{summary.openingBalance}</td>
        </tr>

        <tr>
          <td className="w-64">Total credits</td>
          <td>{summary.totalCredits}</td>
        </tr>

        <tr>
          <td className="w-64">Total debit</td>
          <td>{summary.totalDebits}</td>
        </tr>

        <tr>
          <td className="w-64">Closing balance</td>
          <td>{summary.closingBalance}</td>
        </tr>

        <tr>
          <td className="w-64">Minimum balance</td>
          <td>{summary.minBalance}</td>
        </tr>

      </table>
    </div>
  );
};

export default StatementSummary;
