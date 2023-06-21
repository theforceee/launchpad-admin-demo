import { erc20ABI, useContractRead } from "wagmi";
import ERC20_ABI from "../abi/Erc20.json";
import { formatEther } from "viem";

const useTokenBalance = (
  tokenAddress: `0x${string}` | undefined,
  poolContractAddress: `0x${string}` | undefined,
) => {
  const { data: contractBalance } = useContractRead({
    address: tokenAddress,
    abi: ERC20_ABI,
    enabled: !!tokenAddress && !!poolContractAddress,
    functionName: "balanceOf",
    onError(error) {
      console.log("Error balanceOf", error);
    },
    args: poolContractAddress && [poolContractAddress],
  });

  return {
    contractBalance: contractBalance ? formatEther(contractBalance as any) : 0,
  };
};

export default useTokenBalance;
