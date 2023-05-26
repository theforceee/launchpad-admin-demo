import React from "react";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PublicRefundAmount = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;

  const handleDepositRefund = () => {
    console.log("handleDepositRefund");
  };

  const handleWithdrawRefund = () => {
    console.log("handleWithdrawRefund");
  };

  return (
    <>
      <label className="formInputLabel">Refund Amount</label>
      <div className="!ml-0 grid flex-1 grid-cols-2 ">
        <div className="flex flex-col">
          <span className="text-16/24 font-bold text-gray-500">
            0 USDT Refunds Requested
          </span>
          <input
            type="button"
            value="Deposit Refund"
            className="formButton mt-3 bg-gray-600 px-5 text-white"
            onClick={handleDepositRefund}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-16/24 font-bold text-gray-500">
            0 USDT Refund Contract Balance
          </span>
          <input
            type="button"
            value="Withdraw Refund"
            className="formButton mt-3 bg-gray-600 px-5 text-white"
            onClick={handleWithdrawRefund}
          />
        </div>
      </div>
    </>
  );
};

export default PublicRefundAmount;
