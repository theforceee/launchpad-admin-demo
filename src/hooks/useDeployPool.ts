import { BigNumber, ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import poolFactoryABI from "../abi/IdoPoolFactory.json";
import {
  IDO_POOL_FACTORY_BSC_SMART_CONTRACT,
  IDO_POOL_FACTORY_SMART_CONTRACT,
  MAPPING_CURRENCY_ADDRESS,
  MAPPING_CURRENCY_DECIMALS,
  MAPPING_NETWORK_ID_BY_NAME,
  NETWORK_AVAILABLE,
  NetworkAvailable,
} from "../constants";
import { put } from "../requests";
import { getCurrencyToTokenRate } from "../utils/campaign";
import { getErrorMessage } from "../utils/getErrorMessage";

function fromReadableAmount(amount: number, decimals: number) {
  return ethers.utils.parseUnits(amount.toString(), decimals);
}

const useDeployPool = (poolNetwork: NetworkAvailable) => {
  let factoryContractAddress: any;
  switch (poolNetwork) {
    case NETWORK_AVAILABLE.BSC:
      factoryContractAddress = IDO_POOL_FACTORY_BSC_SMART_CONTRACT;
      break;

    case NETWORK_AVAILABLE.ETH:
    default:
      factoryContractAddress = IDO_POOL_FACTORY_SMART_CONTRACT;
      break;
  }

  const {
    data: dataDeploy,
    isLoading: loadingDeploy,
    write: writeDeploy,
  } = useContractWrite({
    address: factoryContractAddress,
    abi: poolFactoryABI,
    functionName: "registerPool",
    chainId: +MAPPING_NETWORK_ID_BY_NAME[poolNetwork],
    // account: connectedAccount,
    onError(error) {
      console.log("ERROR deploy:", error?.message);
      toast.error(getErrorMessage(error, "Fail to Deploy Pool"));
    },
  });

  const { data: dataHash, isLoading: loadingHash } = useWaitForTransaction({
    hash: dataDeploy?.hash,
    enabled: !!dataDeploy && !loadingDeploy,
  });

  const [poolUpdateData, setPoolUpdateData] = useState<{
    id: number | undefined;
    is_private: boolean | undefined;
    receiver_address: any;
  }>();

  useEffect(() => {
    (async () => {
      if (dataHash?.status === "reverted") {
        console.log("staking error", dataHash);
        toast.error("FAIL: execution reverted");
      }
      if (dataHash?.status === "success") {
        const dataUpdate = {
          ...poolUpdateData,
          address: dataHash?.logs[0].address,
          registered_by: dataHash?.from,
        };

        const updateRes = await put(`/pool/${poolUpdateData?.id}/deploy`, {
          body: dataUpdate,
        });
        console.log("%c updateRes deploy", "color:red", updateRes);
        if (!updateRes || updateRes.status !== 200) {
          toast.error("ERROR: pool failed to be deployed");
          return;
        }

        toast.success("SUCCESS: pool has been deployed");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    })();
  }, [dataHash]);

  const deployPool = useCallback(
    async (pool: any, poolType: "public" | "private") => {
      console.log("deploying", poolType, pool);
      if (!pool) return;

      const { pools, token, signer, accepted_currency, id } = pool;
      const { network, token_address, token_decimal } = token;

      let currentPool;
      if (poolType === "private") currentPool = pools.find((item: any) => !!item.is_private);
      else currentPool = pools.find((item: any) => !item.is_private);
      if (currentPool?.is_deployed) {
        toast.error("ERROR: pool has already deployed");
        return;
      }

      const { conversion_rate, start_buy_time, end_buy_time, token_allocated, receiver_address } =
        currentPool;
      const signerWallet = signer?.wallet_address;
      const offeredCurrency = (MAPPING_CURRENCY_ADDRESS as any)[network][accepted_currency];
      const openTime = start_buy_time;
      const duration = end_buy_time - start_buy_time;
      const tokenAmountForSale = fromReadableAmount(
        token_allocated / conversion_rate,
        token_decimal,
      );
      const offeredCurrencyRate = getCurrencyToTokenRate(
        conversion_rate,
        token_decimal,
        MAPPING_CURRENCY_DECIMALS[network][accepted_currency],
      );
      const offeredCurrencyDecimals = BigNumber.from(30);

      writeDeploy?.({
        args: [
          token_address,
          tokenAmountForSale,
          duration,
          openTime,
          offeredCurrency,
          offeredCurrencyRate,
          offeredCurrencyDecimals,
          receiver_address,
          signerWallet,
        ],
      });

      setPoolUpdateData({ id, is_private: currentPool.is_private, receiver_address });
    },
    [writeDeploy],
  );

  return { deployPool, loadingDeploy: loadingDeploy || loadingHash };
};

export default useDeployPool;
