// TODO: ideally this file and its server copy should be one shared file to 
// avoid them potentially getting out of sync

export interface BankTransactions {
  dataVersion: number;
  reference: string;
  submissionTime: string;
  banks: Bank[];
  decisionMetrics: DecisionMetric[];
}

export interface Bank {
  bankName: string;
  bankSlug: string;
  errors: any[];
  bankAccounts: BankAccount[];
  address: { [key: string]: string };
}

export interface BankAccount {
  id: number;
  accountType: string;
  accountHolder: string;
  accountHolderType: string;
  accountName: string;
  bsb: string;
  accountNumber: string;
  currentBalance: string;
  availableBalance: string;
  transactions: Transaction[];
  statementSummary: StatementSummary;
  statementAnalysis: StatementAnalysis[];
  additionalDetails: AdditionalDetails;
}

export interface AdditionalDetails {
  interestRate: string;
  email: string;
  openDate?: string;
  phone: string;
  address: { [key: string]: string };
  bonusInterestRate?: string;
  debitInterestRate?: string;
  interestPaymentFrequency?: string;
  nextInterestPayment?: string;
  overdraftLimit?: string;
  overdraftRemaining?: string;
  overdraftUsed?: string;
  cardholderRelationship?: string;
  creditLimit?: string;
  lastPayment?: string;
  minimumAmountDue?: string;
  minimumAmountDueDate?: string;
  nextPaymentDue?: string;
}

export interface StatementAnalysis {
  analysisCategory: AnalysisCategory;
}

export interface AnalysisCategory {
  name: CategoryEnum;
  analysisPoints: AnalysisPoint[];
  transactionGroups: TransactionGroup[];
}

export interface AnalysisPoint {
  name: AnalysisPointName;
  value: number | string;
  title: Title;
  type: AnalysisPointType;
}

export enum AnalysisPointName {
  AmountFunded = "amountFunded",
  AmountReversals = "amountReversals",
  AverageAmountFunded = "averageAmountFunded",
  AverageDebitAmount = "averageDebitAmount",
  AverageTransactionAmount = "averageTransactionAmount",
  CountOfDebits = "countOfDebits",
  CountOfLoans = "countOfLoans",
  CountOfLoansFunded = "countOfLoansFunded",
  CountOfOngoingLoans = "countOfOngoingLoans",
  CountOfProviders = "countOfProviders",
  CountOfTransactions = "countOfTransactions",
  CountReversals = "countReversals",
  DaysSinceLastTransaction = "daysSinceLastTransaction",
  EndDate = "endDate",
  Frequency = "frequency",
  FrequencyDay = "frequencyDay",
  LoanOngoing = "loanOngoing",
  MonthlyAmountAverage = "monthlyAmountAverage",
  OngoingRepaymentAmount = "ongoingRepaymentAmount",
  StartDate = "startDate",
  TotalAmount = "totalAmount",
  TotalAmountCredits = "totalAmountCredits",
  TotalAmountDebits = "totalAmountDebits",
  TotalAmountLast30Days = "totalAmountLast30Days",
}

export enum Title {
  AmountDebits = "Amount Debits",
  AmountFunded = "Amount Funded",
  AmountOfReversals = "Amount of Reversals",
  AverageAmountFunded = "Average Amount Funded",
  AverageDebitAmount = "Average Debit Amount",
  AverageTransactionAmount = "Average Transaction Amount",
  CountOfDebits = "Count of Debits",
  CountOfLoans = "Count of Loans",
  CountOfLoansFunded = "Count of Loans Funded",
  CountOfOngoingLoans = "Count of Ongoing Loans",
  CountOfProviders = "Count of Providers",
  CountOfReversals = "Count of Reversals",
  CountOfTransactions = "Count of Transactions",
  DaysSinceLastTransaction = "Days Since Last Transaction",
  EndDate = "End Date",
  Frequency = "Frequency",
  FrequencyDay = "Frequency Day",
  LoanOngoing = "Loan Ongoing",
  MonthlyAverageAmount = "Monthly Average Amount",
  OngoingRepaymentAmount = "Ongoing Repayment Amount",
  StartDate = "Start Date",
  TotalAmount = "Total Amount",
  TotalAmountCredits = "Total Amount - Credits",
  TotalAmountDebits = "Total Amount - Debits",
  TotalAmountLast30Days = "Total Amount - Last 30 Days",
}

export enum AnalysisPointType {
  Date = "date",
  Integer = "integer",
  Money = "money",
  String = "string",
}

export enum CategoryEnum {
  AllOtherCredits = "All Other Credits",
  Centrelink = "Centrelink",
  ExternalTransfers = "External Transfers",
  Fees = "Fees",
  Gambling = "Gambling",
  Groceries = "Groceries",
  InternalTransfer = "Internal Transfer",
  NonSACCLoans = "Non SACC Loans",
  Overdrawn = "Overdrawn",
  RefundsAndReturns = "Refunds and Returns",
  Rent = "Rent",
  SACCLoans = "SACC Loans",
  Telecommunications = "Telecommunications",
  UncategorisedDebits = "Uncategorised Debits",
  Wages = "Wages",
}

export interface TransactionGroup {
  name: string;
  analysisPoints: AnalysisPoint[];
  transactions: Transaction[];
}

export interface Transaction {
  date: string;
  description: Description;
  amount: number;
  balance: string;
  type: TransactionType;
  tags: Tag[];
  transactionHash: string;
  logo: string;
  suburb: string;
}

export enum Description {
  AnUncategorisedDebit = "An uncategorised debit",
  AutomaticDrawingO13439G2GLoansGoodToGoLoans = "AUTOMATIC DRAWING O13439 G2G LOANS GOOD TO GO LOANS",
  BPAYMoneyToTelstra = "BPAY Money to Telstra",
  CtrlinkNewstart = "Ctrlink Newstart",
  DebitExcessInterest = "Debit Excess Interest",
  DirectDebit428198FERRATUM11813938 = "Direct Debit 428198 FERRATUM 11813938",
  DirectDebit843752GymMembership = "Direct Debit 843752 Gym Membership",
  DirectRVSL301500FerratumAustralLoan419913 = "Direct RVSL 301500 Ferratum Austral Loan 419913",
  DirectRVSLToCompany = "Direct RVSL to company",
  EftposWoolworths1111BentleyWaAu = "EFTPOS WOOLWORTHS 1111BENTLEY WA AU",
  InterestCurrentRateIs105 = "Interest - current rate is 1.05%",
  LoanPayment = "Loan payment",
  LoanRepayment = "Loan Repayment",
  MaintenanceFee = "Maintenance Fee",
  Misc = "Misc",
  MoneyFromCrownbet = "Money from Crownbet",
  MoneyMeLoanFunded = "MoneyMe Loan Funded",
  MoneyMePayment = "MoneyMe payment",
  MoneyToCrownbet = "Money to Crownbet",
  PendingTransaction = "Pending Transaction",
  RentPayment = "Rent payment",
  SunshineLoanRepayment = "Sunshine Loan Repayment",
  TransactionDetailsAvailableNextBusinessDay = "Transaction Details Available Next Business Day",
  VisaPendingEFTPOSWOOLWORTHS1111DATETESTWAAU = "Visa Pending: EFTPOS WOOLWORTHS 1111DATETEST WA AU",
  WageFromDeliveryServiceJob = "Wage from delivery service job",
}

export interface Tag {
  thirdParty?: ThirdParty;
  category?: CategoryEnum;
  creditDebit?: CreditDebit;
  lenderType?: LenderType;
  pending?: Pending;
}

export enum CreditDebit {
  Credit = "credit",
  Debit = "debit",
}

export enum LenderType {
  OtherLoansOnly = "Other loans only",
  SACCLoansOnly = "SACC loans only",
  SACCSAndOtherLoans = "SACCs and Other loans",
}

export enum Pending {
  Pending = "pending",
}

export enum ThirdParty {
  BetEasy = "BetEasy",
  DirectDebit = "Direct Debit",
  Ferratum = "Ferratum",
  GoodToGo = "Good To Go",
  JobSeeker = "JobSeeker",
  LoanRepaymentDebit = "Loan Repayment Debit",
  MoneyMe = "MoneyMe",
  OtherCredits = "Other Credits",
  OtherTransfers = "Other Transfers",
  PendingTransfer = "Pending Transfer",
  Rent = "Rent",
  SunshineLoans = "Sunshine Loans",
  Telstra = "Telstra",
  Wages = "Wages",
  Woolworths = "Woolworths",
}

export enum TransactionType {
  DirectDebit = "Direct Debit",
  Empty = "",
  GeneralPayment = "General Payment",
  InboundTransfer = "Inbound Transfer",
  Informational = "Informational",
  MaintenanceFees = "Maintenance Fees",
  OverdrawnFees = "Overdrawn Fees",
  ReversedTransactions = "Reversed Transactions",
  WelfarePayments = "Welfare Payments",
}

export interface StatementSummary {
  openingBalance: string;
  totalCredits: string;
  totalDebits: string;
  closingBalance: string;
  minBalance: string;
  minDayEndBalance: string;
  daysInNegative: number;
  searchPeriodStart: string;
  searchPeriodEnd: string;
  transactionsStartDate: string;
  transactionsEndDate: string;
  creditsCategorised: string;
  creditsUncategorised: string;
  debitsCategorised: string;
  debitsUncategorised: string;
  internalTransferDebits: string;
  internalTransferCredits: string;
  accountMovement: string;
  dayEndBalances: DayEndBalance[];
}

export interface DayEndBalance {
  date: string;
  balance: string;
}

export interface DecisionMetric {
  id: string;
  name: string;
  descriptor: string;
  type: AnalysisPointType;
  value: number | string;
}
