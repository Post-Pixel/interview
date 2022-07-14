import React from 'react';
import { BankAccount } from '../models/transactions';

const AdditionalDetails: React.FC<{account: BankAccount}> = (props) => {
  const { account } = props;
  const details = account.additionalDetails;

  return (
    <div className="my-3">
      <h3 className="font-semibold text-lg">
        Additional Details
      </h3>

      <table>
        <tr>
          <td className="w-64">Interest rate</td>
          <td>{details.interestRate}</td>
        </tr>

        <tr>
          <td className="w-64">Email</td>
          <td>{details.email}</td>
        </tr>

        <tr>
          <td className="w-64">Open date</td>
          <td>{details.openDate}</td>
        </tr>

        <tr>
          <td className="w-64">Phone</td>
          <td>{details.phone}</td>
        </tr>

        <tr>
          <td className="w-64">Bonus interest rate</td>
          <td>{details.bonusInterestRate}</td>
        </tr>
      </table>
    </div>
  );
};

export default AdditionalDetails;
