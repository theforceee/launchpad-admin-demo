import { useBalance } from "wagmi";

const useTokenBalance = (
  tokenAddress: `0x${string}` | undefined,
  poolContractAddress: `0x${string}` | undefined,
) => {
  const { data: contractBalance } = useBalance({
    address: poolContractAddress,
    token: tokenAddress,
  });

  return {
    contractBalance: contractBalance?.formatted || "0",
  };
};

export default useTokenBalance;
