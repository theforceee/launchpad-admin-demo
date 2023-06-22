import { useBalance } from "wagmi";

const useTokenBalance = (
  tokenAddress: `0x${string}` | undefined,
  poolContractAddress: `0x${string}` | undefined,
) => {
  const { data: contractBalanceData } = useBalance({
    address: poolContractAddress,
    token: tokenAddress,
  });

  return {
    contractBalanceData,
  };
};

export default useTokenBalance;
