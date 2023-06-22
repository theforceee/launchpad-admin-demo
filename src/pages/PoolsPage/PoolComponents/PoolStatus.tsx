import { formatCurrency } from "../../../utils";

const PoolStatus = (props: any) => {
  const { tokenAllocated, contractBalanceData } = props;

  return (
    <div className="flex items-center">
      <label className="formInputLabelShort">Pool Status</label>

      <label className="text-16/24 font-semibold text-red-500">
        {`Awaiting Deposit of ${formatCurrency(
          tokenAllocated - contractBalanceData?.formatted || 0,
        )} ${contractBalanceData?.symbol}`}
      </label>
    </div>
  );
};

export default PoolStatus;
