import { useCallback, useState } from "react";
import { getErc20Contract, getReadOnlyTokenContract } from "../services/web3";

type TokenBalanceProps = {
  networkAvailable: string | undefined;
  poolContractAddress: string | undefined;
  tokenAddress: string | undefined;
};

const useTokenBalance = (props: TokenBalanceProps) => {
  const { networkAvailable, poolContractAddress, tokenAddress } = props;
  const [tokenBalance, setTokenBalance] = useState<string>("");

  const getTokenBalance = useCallback(async () => {
    console.log("getTokenBalance", networkAvailable, poolContractAddress, tokenAddress);
    if (!networkAvailable || !poolContractAddress || !tokenAddress) return;

    const ercContract = getReadOnlyTokenContract({
      networkAvailable,
      tokenAddress: poolContractAddress,
    });
    console.log("getTokenBalance", ercContract);
    if (!ercContract) return;

    try {
      const balance = await ercContract.balanceOf(tokenAddress);
      console.log("Token balance:", balance.toString());
      setTokenBalance(balance.toString());
    } catch (error) {
      console.error("Error getting token balance:", error);
    }
  }, [networkAvailable, poolContractAddress, tokenAddress]);

  return { tokenBalance, getTokenBalance };
};
export default useTokenBalance;
