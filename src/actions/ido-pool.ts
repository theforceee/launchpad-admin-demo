import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import poolFactoryABI from "../abi/IdoPoolFactory.json";
import {
  IDO_POOL_FACTORY_BSC_SMART_CONTRACT,
  IDO_POOL_FACTORY_SMART_CONTRACT,
  MAPPING_CURRENCY_ADDRESS,
  MAPPING_CURRENCY_DECIMALS,
  NETWORK_AVAILABLE,
} from "../constants";
import { put } from "../requests";
import { getContractInstance } from "../services/web3";
import { getCurrencyToTokenRate } from "../utils/campaign";
import { getErrorMessage } from "../utils/getErrorMessage";

function fromReadableAmount(amount: number, decimals: number) {
  return ethers.utils.parseUnits(amount.toString(), decimals);
}

export const deployPool = async (pool: any, poolType: "public" | "private") => {
  if (!pool) return;
  console.log("deploying", poolType, pool);
  const { pools, token, signer, accepted_currency, slug } = pool;
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
  const offeredCurrency = MAPPING_CURRENCY_ADDRESS[network][accepted_currency];
  const openTime = start_buy_time;
  const duration = end_buy_time - start_buy_time;
  const tokenAmountForSale = fromReadableAmount(token_allocated / conversion_rate, token_decimal);
  const offeredCurrencyRate = getCurrencyToTokenRate(
    conversion_rate,
    token_decimal,
    MAPPING_CURRENCY_DECIMALS[network][accepted_currency],
  );
  const offeredCurrencyDecimals = BigNumber.from(30);

  let factorySmartContract;
  switch (pool.token?.network) {
    case NETWORK_AVAILABLE.BSC:
      factorySmartContract = getContractInstance(
        poolFactoryABI,
        IDO_POOL_FACTORY_BSC_SMART_CONTRACT,
        false,
      );
      break;

    case NETWORK_AVAILABLE.ETH:
    default:
      factorySmartContract = getContractInstance(poolFactoryABI, IDO_POOL_FACTORY_SMART_CONTRACT);
      break;
  }

  try {
    const tx = await factorySmartContract.registerPool(
      token_address,
      tokenAmountForSale,
      duration,
      openTime,
      offeredCurrency,
      offeredCurrencyRate,
      offeredCurrencyDecimals,
      receiver_address,
      signerWallet,
    );
    const receipt = await tx.wait();
    // console.log("Deploy Response: ", receipt);
    const poolAddress = receipt.events[0].address;

    // update after deployed
    const dataUpdate = {
      is_private: currentPool.is_private,
      address: poolAddress,
      registered_by: receipt.from,
      receiver_address,
    };

    const updateRes = await put(`/pool/${slug}/deploy`, {
      body: dataUpdate,
    });
    console.log("%c updateRes deploy", "color:red", updateRes);
    if (!updateRes || updateRes.status !== 200) {
      toast.error("ERROR: pool failed to be deployed");
      return;
    }

    toast.success("SUCCESS: pool has been deployed");
    window.location.reload();
  } catch (error) {
    console.log("Fail to deploy Pool", error);
    toast.error(getErrorMessage(error, "Fail to deploy Pool"));
    return;
  }
};
