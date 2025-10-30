import { LuTag } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { VscCreditCard } from "react-icons/vsc";

/* eslint-disable react/prop-types */
const Actions = () => {
  return (
    <div className="flex justify-center gap-6">
      <ActionButton
        textColor={"text-blue-500"}
        shadowColor={"shadow-blue-400"}
        bgColor={"bg-blue-100"}
        title={"Pay Bills"}
        icon={<VscCreditCard size={28} />}
      />
      <ActionButton
        textColor={"text-green-500"}
        shadowColor={"shadow-green-400"}
        bgColor={"bg-green-100"}
        title={"Transfer"}
        icon={<TfiWallet size={24} />}
      />
      <ActionButton
        textColor={"text-orange-500"}
        shadowColor={"shadow-orange-400"}
        bgColor={"bg-orange-100"}
        title={"Categories"}
        icon={<LuTag size={24} />}
      />
    </div>
  );
};

const ActionButton = (props) => {
  return (
    <button
      className={`${props.bgColor} w-80 rounded-lg shadow-md  py-3 ${props.shadowColor}`}
    >
      <span className="flex items-center justify-center">
        <span className={`mr-3 ${props.textColor}`}>{props.icon}</span>
        <span className={`text-lg font-normal ${props.textColor}`}>
          {props.title}
        </span>
      </span>
    </button>
  );
};

export default Actions;
