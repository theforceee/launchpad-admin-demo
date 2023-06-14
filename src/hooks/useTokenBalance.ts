import { erc20ABI, useContractRead } from "wagmi";
import IdoPool_ABI from "../abi/IdoPool.json";
import Erc20_ABI from "../abi/Erc20.json";
import { ethers } from "ethers";

const useTokenBalance = (
  tokenAddress: `0x${string}` | undefined,
  poolContractAddress: `0x${string}` | undefined,
) => {
  // const { isWrongChain } = useContext(AppContext);

  // const { data: userBalance, isLoading } = useContractRead({
  //   address: tokenAddress,
  //   abi: IdoPool_ABI,
  //   chainId: 97,
  //   // enabled: !!tokenAddress && !!poolContractAddress,
  //   functionName: "totalUnclaimed",
  //   onError(error) {
  //     console.log("Error to fetch balance", error);
  //   },
  //   args: [],
  //   onSuccess(data) {
  //     console.log("userBalance", data);
  //   },
  // });

  const { data: contractBalance } = useContractRead({
    address: tokenAddress,
    abi: erc20ABI,
    enabled: !!tokenAddress && !!poolContractAddress,
    functionName: "balanceOf",
    chainId: 97,
    onError(error) {
      console.log("Error balanceOf", error);
    },
    args: poolContractAddress && [poolContractAddress],
  });

  return { contractBalance: ethers.utils.formatEther(contractBalance || 0) };
};

export default useTokenBalance;
