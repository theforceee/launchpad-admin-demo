import { formatCurrency } from "../../../utils";

const TokenAmount = (props: any) => {
  const { contractBalanceData } = props;

  return (
    <div className="flex items-center">
      <label className="formInputLabel">Token Amount</label>

      <div className="flex items-center text-16/24 font-semibold text-red-500">
        <span className="">{formatCurrency(contractBalanceData?.formatted || 0)}</span>
        <span className="ml-1">{contractBalanceData?.symbol}</span>
      </div>
    </div>
  );
};

export default TokenAmount;
