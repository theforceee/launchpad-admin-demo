import { useContext } from "react";
import { formatCurrency } from "../../../utils";
import { AppContext } from "../../../contexts/AppContext";

const PoolStatus = (props: any) => {
  const { tokenAllocated, contractBalance } = props;

  return (
    <div className="flex items-center">
      <label className="formInputLabelShort">Pool Status</label>

      <label className="text-16/24 font-semibold text-red-500">
        {`Awaiting Deposit of ${formatCurrency(tokenAllocated - contractBalance || 0)} Tokens`}
      </label>
    </div>
  );
};

export default PoolStatus;
