import Cashflow from "./Cashflow";
import RecentTransactions from "./RecentTransactions";

const TransactionsCashflow = () => {
  return (
    <div className="flex justify-between py-12 gap-5 items-center">
      <RecentTransactions />
      <Cashflow />
    </div>
  );
};

export default TransactionsCashflow;
