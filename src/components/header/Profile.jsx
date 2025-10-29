import { IoIosNotificationsOutline } from "react-icons/io";

const Profile = () => {
  return (
    <div className="flex items-center">
      <IoIosNotificationsOutline size={30} />
      <img
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
        className="ml-2.5 h-12 w-12 object-cover rounded-full border-2 border-blue-700"
      />
    </div>
  );
};

export default Profile;
