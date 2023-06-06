import { BigNumber, ethers } from "ethers";
import poolFactoryABI from "../abi/IdoPoolFactory.json";
import {
  IDO_POOL_FACTORY_BSC_SMART_CONTRACT,
  IDO_POOL_FACTORY_POLYGON_SMART_CONTRACT,
  IDO_POOL_FACTORY_SMART_CONTRACT,
  MAPPING_CURRENCY_ADDRESS,
  MAPPING_CURRENCY_DECIMALS,
  NETWORK_AVAILABLE,
} from "../constants";
import { getContractInstance } from "../services/web3";
import { getCurrencyToTokenRate } from "../utils/campaign";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/getErrorMessage";

function fromReadableAmount(amount: number, decimals: number) {
  return ethers.utils.parseUnits(amount.toString(), decimals);
}

export const deployPool = async (pool: any, poolType: "public" | "private") => {
  if (!pool) return;
  console.log("deploying", poolType, pool);
  const { pools, token, signer, accepted_currency } = pool;
  const { network, token_address, token_decimal } = token;

  let currentPool;
  if (poolType === "private") currentPool = pools.find((item: any) => !!item.is_private);
  else currentPool = pools.find((item: any) => !item.is_private);

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

    case NETWORK_AVAILABLE.POLYGON:
      factorySmartContract = getContractInstance(
        poolFactoryABI,
        IDO_POOL_FACTORY_POLYGON_SMART_CONTRACT,
        false,
      );
      break;

    case NETWORK_AVAILABLE.ETH:
    default:
      factorySmartContract = getContractInstance(poolFactoryABI, IDO_POOL_FACTORY_SMART_CONTRACT);
      break;
  }

  try {
    console.log(
      "data log",
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
    await tx.wait();

    console.log("Deploy Response: ", tx);
    const poolAddress = await factorySmartContract.pool();
    return poolAddress;
  } catch (error) {
    console.log("Fail to deploy Pool", error);
    toast.error(getErrorMessage(error, "Fail to deploy Pool"));
    return;
  }
};
