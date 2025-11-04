import Actions from "./Actions";
import IncomeExpenseButton from "./IncomeExpenseButton";
import IncomeExpenseCard from "./IncomeExpenseCard";
import SpendingByCategory from "./SpendingByCategory";
import TransactionsCashflow from "./TransactionsCashflow";
import Welcome from "./Welcome";

const Content = () => {
  return (
    <main className="px-40 w-full ">
      <Welcome />
      <Actions />
      <IncomeExpenseCard />
      <IncomeExpenseButton />
      <TransactionsCashflow />
      <SpendingByCategory />
    </main>
  );
};

export default Content;
