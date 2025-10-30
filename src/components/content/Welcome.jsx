import { CiSearch } from "react-icons/ci";

const Welcome = () => {
  return (
    <div className="flex py-9 justify-between  items-center">
      <h1 className="text-3xl font-medium ">Welcome Back Alex!</h1>
      <div className="flex py-1.5 rounded-xl border-2 items-center self-stretch border-gray-200">
        <CiSearch size={26} className="text-gray-400 ml-6" />
        <input
          type="text"
          placeholder="Search transactions..."
          className="border-none bg-none outline-none placeholder:text-gray-400 pl-3"
        />
      </div>
    </div>
  );
};

export default Welcome;
