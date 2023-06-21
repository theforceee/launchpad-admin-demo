import { ethers } from "ethers";
import { erc20ABI, useContractRead } from "wagmi";

const useTokenBalance = (
  tokenAddress: `0x${string}` | undefined,
  poolContractAddress: `0x${string}` | undefined,
) => {
  const { data: contractBalance } = useContractRead({
    address: tokenAddress,
    abi: erc20ABI,
    enabled: !!tokenAddress && !!poolContractAddress,
    functionName: "balanceOf",
    onError(error) {
      console.log("Error balanceOf", error);
    },
    args: poolContractAddress && [poolContractAddress],
  });

  return {
    contractBalance: contractBalance
      ? ethers.utils.formatEther(+BigInt(contractBalance).toString())
      : 0,
  };
};

export default useTokenBalance;
