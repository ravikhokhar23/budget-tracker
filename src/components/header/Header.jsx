import Logo from "./Logo";
import Profile from "./Profile";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <div className="flex px-24 py-3 justify-between items-center border-b-2 border-b-gray-200">
      <Logo />
      <Tabs />
      <Profile />
    </div>
  );
};

export default Header;
