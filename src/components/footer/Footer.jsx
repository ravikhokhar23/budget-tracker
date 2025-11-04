/* eslint-disable react/prop-types */
const Footer = () => {
  return (
    <div className="mt-10 mb-5 px-40 py-12 border-t-2 border-t-gray-200 flex flex-col font-medium">
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
      <Copyright />
    </div>
  );
};

const Overview = () => {
  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-blue-500 text-xl font-medium">BudgetTracker</h2>
      <p className="text-md pt-4 text-gray-600">
        Take control of your finances with smart budgeting and expense tracking
      </p>
    </div>
  );
};

const Items = (props) => {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="font-bold text-md ml-18">{props.title}</h1>
      <ul className="ml-18 pt-4 text-md">
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

const Copyright = () => {
  return (
    <div className="flex mt-8 text-gray-500 text-md justify-between">
      <p>© 2025 BudgetTracker. All rights reserved.</p>
      <div className="flex">
        <span className="pl-3">Privacy</span>
        <span className="pl-5">Terms</span>
        <span className="pl-5">Cookies</span>
      </div>
    </div>
  );
};

export default Footer;
