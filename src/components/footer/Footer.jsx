/* eslint-disable react/prop-types */
const Footer = () => {
  return (
    <div className="mt-10 mb-5 px-40 py-12 border-t-2 border-t-gray-200 ">
      <div className="flex justify-between pb-10 border-b-2 border-b-gray-200">
        <Overview />

        <Items
          title="Features"
          listItems={[
            "Expense Tracking",
            "Budget Planning",
            "Financial Goals",
            "Report & Analytics",
          ]}
        />
        <Items
          title="Resources"
          listItems={["Help Center", "Blog", "Community", "Contact Support"]}
        />
        <Items
          title="Legal"
          listItems={[
            "Privacy Policy",
            "Terms of Service",
            "Security",
            "Accessibility",
          ]}
        />
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-blue-500 text-xl font-medium">BudgetTracker</h2>
      <p className="text-sm pt-4 text-gray-600">
        Take control of your finances with smart budgeting and expense tracking
      </p>
    </div>
  );
};

const Items = (props) => {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="font-bold text-sm ml-18">{props.title}</h1>
      <ul className="ml-18 pt-4">
        {props.listItems.map((item, index) => (
          <ListItem text={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  return (
    <li className="text-gray-600 pb-1">
      <span className="pr-2">•</span>
      {props.text}
    </li>
  );
};

export default Footer;
