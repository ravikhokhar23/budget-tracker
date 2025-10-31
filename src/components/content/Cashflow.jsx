import LineChart from "./LineChart";

const Cashflow = () => {
  return (
    <div className="flex flex-col flex-1 h-100 border-2 border-gray-200 rounded-md">
      <h2 className="px-3 py-5 font-medium text-xl">Cashflow</h2>
      <LineChart />
    </div>
  );
};

export default Cashflow;
