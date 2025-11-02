import Footer from "../footer/Footer";
import Actions from "./Actions";
import IncomeExpenseButton from "./IncomeExpenseButton";
import IncomeExpenseCard from "./IncomeExpenseCard";
import SpendingByCategory from "./SpendingByCategory";
import TransactionsCashflow from "./TransactionsCashflow";
import Welcome from "./Welcome";

const Content = () => {
  return (
    <main className="px-40 w-full h-screen">
      <Welcome />
      <Actions />
      <IncomeExpenseCard />
      <IncomeExpenseButton />
      <TransactionsCashflow />
      <SpendingByCategory />
      <Footer />
    </main>
  );
};

export default Content;
