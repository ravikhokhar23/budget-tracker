/* eslint-disable react/prop-types */
import { FaCarSide } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineMovieFilter } from "react-icons/md";

const RecentTransactions = () => {
  return (
    <div className="flex-1 flex-col h-155 border-2 border-gray-200 rounded-md px-8 py-3">
      <div className="flex justify-between">
        <h1 className="font-medium text-xl">
          Recent <br />
          Transactions
        </h1>
        <button className="text-blue-600">View All</button>
      </div>
      <div>
        <Transactions
          icon={<FcHome size={22} />}
          category={"Housing"}
          categoryType={"Monthly Rent"}
          paymentType={"Credit Card"}
          amount={"-$1200"}
          amountColor={"text-red-600"}
          date={"Today"}
        />
        <Transactions
          icon={<IoFastFoodOutline color="green" size={22} />}
          category={"Food"}
          categoryType={"Grocery Shopping"}
          paymentType={"Debit Card"}
          amount={"-$80"}
          amountColor={"text-red-600"}
          date={"Today"}
        />
        <Transactions
          icon={<LiaMoneyCheckAltSolid color="DarkOrange" size={22} />}
          category={"Salary"}
          categoryType={"Monthly Salary"}
          paymentType={"Bank Transfer"}
          amount={"+$8199"}
          amountColor={"text-green-600"}
          date={"Yesterday"}
        />
        <Transactions
          icon={<FaCarSide color="red" size={22} />}
          category={"Transport"}
          categoryType={"Fuel"}
          paymentType={"Credit Card"}
          amount={"-$53.45"}
          amountColor={"text-red-600"}
          date={"Yesterday"}
        />
        <Transactions
          icon={<MdOutlineMovieFilter color="Purple" size={22} />}
          category={"Entertainment"}
          categoryType={"CN Tower Tour"}
          paymentType={"Credit Card"}
          amount={"-$89.99"}
          amountColor={"text-red-600"}
          date={"4 days ago"}
        />
      </div>
    </div>
  );
};

const Transactions = (props) => {
  return (
    <div className="flex  py-5 border-b-2 border-b-gray-200 items-center">
      <div className="w-12 h-12 ml-3 items-center rounded-full bg-gray-200 p-3">
        {props.icon}
      </div>

      <div className="ml-5 flex-1 flex flex-col">
        <span className="text-black font-normal">{props.category}</span>
        <span className="text-gray-500">{props.categoryType}</span>
        <span className="text-gray-400 leading-4">{props.paymentType}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className={`${props.amountColor}`}>{props.amount}</span>
        <span className="text-gray-400 leading-3 ">{props.date}</span>
      </div>
    </div>
  );
};

export default RecentTransactions;
