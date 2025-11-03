/* eslint-disable react/prop-types */
import { MdArrowOutward } from "react-icons/md";
import BarChart from "./BarChart";
import { RxArrowBottomRight, RxArrowTopRight } from "react-icons/rx";

const categories = [
  "Housing",
  "Food",
  "Transport",
  "Entertainment",
  "Utilities",
  "Healthcare",
  "Shopping",
];

// Category data: label and amount
const spendingData = [
  {
    label: "Housing",
    amounts: {
      Housing: 1200,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#3182AA",
    percentage: "2.5%",
    impact: "positive",
    catAmount: "1200",
  },
  {
    label: "Food",
    amounts: {
      Housing: 0,
      Food: 450,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#F3A742",
    percentage: "1.2%",
    impact: "negative",
    catAmount: "450",
  },
  {
    label: "Transport",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 300,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#F3A742",
    percentage: "0.8%",
    impact: "positive",
    catAmount: "300",
  },
  {
    label: "Entertainment",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 200,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#67CDC8",
    percentage: "5.3%",
    impact: "positive",
    catAmount: "200",
  },
  {
    label: "Utilities",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 350,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#A4D931",
    percentage: "0.5%",
    impact: "negative",
    catAmount: "350",
  },
  {
    label: "Healthcare",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 280,
      Shopping: 0,
    },
    color: "#A4D931",
    percentage: "1.7%",
    impact: "positive",
    catAmount: "280",
  },
  {
    label: "Shopping",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 400,
    },
    color: "#774EE7",
    percentage: "3.2%",
    impact: "positive",
    catAmount: "400",
  },
];

const SpendingByCategory = () => {
  return (
    <div className="flex flex-col px-8 border-2 border-gray-200 rounded-lg py-3">
      <h2 className="text-xl font-bold">Spending by Category</h2>

      <div className="flex">
        <BarChart categories={categories} spendingData={spendingData} />

        <div className="flex-1 flex flex-col w-full">
          <SpendingCard />
          <div className="ml-10 mr-10 mt-4 flex flex-col">
            {spendingData.map((item, index) => (
              <Category
                key={index}
                dotColor={item.color}
                category={item.label}
                amount={item.catAmount}
                impact={item.impact}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SpendingCard = () => {
  return (
    <div className="ml-6 mr-6 mt-8 mb-6 rounded-xl p-6 border border-gray-200 shadow-lg">
      <div className="flex justify-between ">
        <h2 className="text-lg text-gray-600">Total Spending</h2>
        <span className="flex text-md text-red-600">
          <span className="self-center mb-1">
            <MdArrowOutward />
          </span>
          <span>1.7%</span>
        </span>
      </div>
      <h1 className="text-2xl font-bold mt-2">$3,180</h1>
    </div>
  );
};

const Category = (props) => {
  const bgColor = `bg-[${props.dotColor}]`;
  console.log("bgcolor", bgColor);
  return (
    <div className="flex flex-row items-center justify-between py-3">
      <div className="flex items-center">
        <span
          style={{ backgroundColor: `${props.dotColor}` }}
          className={`h-4 w-4 rounded-full`}
        ></span>
        <span className="ml-3 text-black text-lg font-normal">
          {props.category}
        </span>
      </div>
      <div className="flex items-center">
        <span className="font-bold text-xl">${props.amount}</span>
        <span
          className={`flex text-md ${
            props.impact === "positive" ? "text-red-600" : "text-green-600"
          } ml-3`}
        >
          <span className="self-center">
            {props.impact === "positive" ? (
              <RxArrowTopRight />
            ) : (
              <RxArrowBottomRight />
            )}
          </span>
          <span>{props.percentage}</span>
        </span>
      </div>
    </div>
  );
};

export default SpendingByCategory;
