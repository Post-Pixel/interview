import React from 'react';
import { BankAccount } from '../models/transactions';

const StatementAnalysis: React.FC<{account: BankAccount}> = (props) => {
  const { account } = props;
  const analyses = account.statementAnalysis;

  const analysisItems = analyses.map((analysis => {
    const category = analysis.analysisCategory;
  
    return (
      <div key={category.name}>
        {category.name}
      </div>
    );
  }));

  return (
    <div className="my-3">
      <h3 className="font-semibold text-lg">
        Statement analysis
      </h3>
      { analysisItems }
    </div>
  );
};

export default StatementAnalysis;
