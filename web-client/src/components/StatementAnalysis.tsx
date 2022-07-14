import React from 'react';
import { BankAccount, AnalysisCategory, AnalysisPointName } from '../models/transactions';

const StatementAnalysis: React.FC<{account: BankAccount}> = (props) => {
  const { account } = props;
  const analyses = account.statementAnalysis;

  const getValueForNamedPoint = (category: AnalysisCategory, name: AnalysisPointName) => {
    const points = category && category.analysisPoints ? category.analysisPoints : [];

    if (points) {
      const matchingPoint = points.find(point => point.name === name);
      return matchingPoint ? matchingPoint.value : null;
    } else {
      return null;
    }
  };

  const analysisItems = analyses.map((analysis => {
    const category = analysis.analysisCategory;

    const total = getValueForNamedPoint(category, AnalysisPointName.TotalAmount);
    const average = getValueForNamedPoint(category, AnalysisPointName.AverageTransactionAmount);
    const number = getValueForNamedPoint(category, AnalysisPointName.CountOfTransactions);

    if (total === null) { return null; }

    return (
      <li key={category.name} className="py-1">
        Total of ${total} spent on {category.name} averaging ${average} over {number} transactions
      </li>
    );
  }));

  return (
    <div className="my-3">
      <h3 className="font-semibold text-lg">
        Statement analysis
      </h3>

      <ul className="list-disc ml-5">
        { analysisItems }
      </ul>
    </div>
  );
};

export default StatementAnalysis;
