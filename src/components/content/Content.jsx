import Actions from "./Actions";
import IncomeExpenseCard from "./IncomeExpenseCard";
import Welcome from "./Welcome";

const Content = () => {
  return (
    <main className="px-32 w-full h-screen">
      <Welcome />
      <Actions />
      <IncomeExpenseCard />
    </main>
  );
};

export default Content;
