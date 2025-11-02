import BarChart from "./BarChart";

const SpendingByCategory = () => {
  return (
    <div className="flex flex-col px-8 border-2 border-gray-200 rounded-lg py-3">
      <h2 className="text-xl font-medium">Spending by Category</h2>
      <BarChart />
    </div>
  );
};

export default SpendingByCategory;
