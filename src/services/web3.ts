import { ethers } from "ethers";
import ERC20_ABI from "../abi/Erc20.json";
import { default as POOL_ABI, default as POOL_PRESALE_ABI } from "../abi/IdoPool.json";
import { NETWORK_AVAILABLE } from "../constants";

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL || "";
const BSC_NETWORK_URL = process.env.REACT_APP_BSC_RPC_URL || "";
const POLYGON_NETWORK_URL = process.env.REACT_APP_POLYGON_RPC_URL || "";

export const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return ethereum?.isMetaMask;
};

export const getContractReadInstance = (
  ABIContract: any,
  contractAddress: string,
  networkAvailable: string,
) => {
  let networkUrl;
  switch (networkAvailable) {
    case NETWORK_AVAILABLE.BSC:
      networkUrl = BSC_NETWORK_URL;
      break;

    case NETWORK_AVAILABLE.POLYGON:
      networkUrl = POLYGON_NETWORK_URL;
      break;

    case NETWORK_AVAILABLE.ETH:
    default:
      networkUrl = NETWORK_URL;
      break;
  }
  const provider = new ethers.providers.JsonRpcProvider(networkUrl);
  console.log("getContractReadInstance", contractAddress, networkUrl, provider);
  if (!provider) return;

  return new ethers.Contract(ABIContract, contractAddress, provider.getSigner());
};

export const getContractInstance = (ABIContract: any, contractAddress: string, isEth = true) => {
  let provider;
  const { ethereum, web3 } = window;
  if (isEth) {
    provider = new ethers.providers.Web3Provider(ethereum);
    if (web3) {
      provider = web3.currentProvider;
    }
  } else {
    provider = new ethers.providers.Web3Provider(ethereum);
  }

  return new ethers.Contract(contractAddress, ABIContract, provider.getSigner());
};

export const getAbiPool = (isClaimable = true) => {
  const ABI = isClaimable ? POOL_PRESALE_ABI : POOL_ABI;
  return ABI;
};

export const getPoolContract = ({ networkAvailable, poolHash, isClaimable = true }: any) => {
  const ABI = isClaimable ? POOL_PRESALE_ABI : POOL_ABI;
  if (networkAvailable == NETWORK_AVAILABLE.ETH) {
    return getContractInstance(ABI, poolHash, true);
  }

  return getContractInstance(ABI, poolHash, false);
};

export const getReadOnlyPoolContract = ({
  networkAvailable,
  poolHash,
  isClaimable = true,
}: any) => {
  const ABI = isClaimable ? POOL_PRESALE_ABI : POOL_ABI;

  return getContractReadInstance(ABI, poolHash, networkAvailable);
};

export const getReadOnlyTokenContract = ({ networkAvailable, tokenAddress }: any) => {
  return getContractReadInstance(ERC20_ABI, tokenAddress, networkAvailable);
};

export const getErc20Contract = ({ networkAvailable, erc20TokenAddress }: any) => {
  let web3Instance = null;
  switch (networkAvailable) {
    case NETWORK_AVAILABLE.BSC:
      web3Instance = getContractInstance(ERC20_ABI, erc20TokenAddress, false);
      break;
    case NETWORK_AVAILABLE.POLYGON:
      web3Instance = getContractInstance(ERC20_ABI, erc20TokenAddress, false);
      break;
    default:
      web3Instance = getContractInstance(ERC20_ABI, erc20TokenAddress, true);
  }

  return web3Instance;
};

export const convertFromWei = (value: any, unit = "ether") => {
  return ethers.utils.formatUnits(value, unit);
};

export const convertToWei = (value: any, unit = "ether") => {
  return ethers.utils.parseUnits(value, unit);
};

export const isValidAddress = (address: string) => {
  return ethers.utils.isAddress(address);
};

export const getETHBalance = async (loginUser: string) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  try {
    const balance = await provider.getBalance(loginUser);

    // Convert the balance to ETH
    const ethBalance = ethers.utils.formatEther(balance);

    return ethBalance;
  } catch (error) {
    return 0;
  }
};
