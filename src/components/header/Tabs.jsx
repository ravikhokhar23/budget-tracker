import { LuGoal } from "react-icons/lu";
import { RiPieChartLine } from "react-icons/ri";

const Tabs = () => {
  return (
    <div className="flex">
      <div className="flex items-center rounded h-12 bg-blue-100 px-2">
        <RiPieChartLine size={20} className="text-blue-500" />
        <h4 className="pl-1.5 text-xl text-blue-500">Dashboard</h4>
      </div>

      <div className="ml-3 flex items-center h-12 rounded  px-2">
        <LuGoal size={20} className="text-gray-400" />
        <h4 className="pl-1.5 text-xl text-gray-400">Goals</h4>
      </div>
    </div>
  );
};

export default Tabs;
