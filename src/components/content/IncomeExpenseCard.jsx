/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TfiWallet } from "react-icons/tfi";
import { VscCreditCard } from "react-icons/vsc";

const IncomeExpenseCard = () => {
  return (
    <div className="flex justify-between py-10 gap-6">
      <Card
        title={"Total Income"}
        icon={<TfiWallet />}
        amount={"$12,400"}
        monthText={"+2% from last month"}
        monthTextColor={"text-green-500"}
      />
      <Card
        title={"Total Balance"}
        icon={<FaDollarSign />}
        amount={"$4,400"}
        monthText={"This month"}
        monthTextColor={"text-gray-500"}
      />
      <Card
        title={"Total Expenses"}
        icon={<VscCreditCard />}
        amount={"$2,800"}
        monthText={"-5% from average"}
        monthTextColor={"text-red-500"}
      />
      <Card
        title={"Investments"}
        icon={<FaArrowTrendUp />}
        amount={"$800"}
        monthText={"+12% return"}
        monthTextColor={"text-green-500"}
      />
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="flex-1 flex flex-col px-4 py-10 border-2 border-gray-200 rounded-lg">
      <div className="flex items-center text-md text-black">
        {props.icon}
        <span className="ml-2">{props.title}</span>
      </div>
      <div className="flex items-end mt-3 p-0">
        <span className="leading-7 font-bold text-4xl ">{props.amount}</span>
        <span className={`text-xs ${props.monthTextColor} ml-3`}>
          {props.monthText}
        </span>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
