/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import { PiCurrencyDollarLight } from "react-icons/pi";

const IncomeExpenseButton = () => {
  return (
    <div className="flex justify-center gap-10">
      <Button
        title={"Add Income"}
        icon={<PiCurrencyDollarLight />}
        bgColor={"bg-green-200"}
        shadowColor={"shadow-green-400"}
        textColor={"text-green-600"}
      />
      <Button
        title={"Add Expense"}
        icon={<FiPlus />}
        bgColor={"bg-red-200"}
        shadowColor={"shadow-red-400"}
        textColor={"text-red-600"}
      />
    </div>
  );
};

const Button = (props) => {
  return (
    <button
      className={`rounded-lg px-5 py-4  shadow-md ${props.bgColor} ${props.shadowColor}`}
    >
      <span className={`${props.textColor} flex items-center text-xl`}>
        <span className="pt-1">{props.icon}</span>
        <span className="ml-3">{props.title}</span>
      </span>
    </button>
  );
};

export default IncomeExpenseButton;
