import Logo from "./Logo";
import Profile from "./Profile";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <div className="font-(family-name:--font-roboto) flex px-40 py-3 justify-between items-center border-b-2 border-b-gray-200">
      <Logo />
      <Tabs />
      <Profile />
    </div>
  );
};

export default Header;
