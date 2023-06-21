import { OptionTypes } from "./poolDetail";

export const IDO_POOL_FACTORY_SMART_CONTRACT =
  process.env.REACT_APP_SMART_CONTRACT_PRESALE_FACTORY_ADDRESS || "";
export const IDO_POOL_FACTORY_BSC_SMART_CONTRACT =
  process.env.REACT_APP_SMART_CONTRACT_BSC_PRESALE_FACTORY_ADDRESS || "";

export const ETH_NETWORK_ID = process.env.REACT_APP_NETWORK_ID || "";
export const BSC_NETWORK_ID = process.env.REACT_APP_BSC_NETWORK_ID || "";

export const USDT_ADDRESS = process.env.REACT_APP_SMART_CONTRACT_USDT_ADDRESS || "";
export const USDC_ADDRESS = process.env.REACT_APP_SMART_CONTRACT_USDC_ADDRESS || "";

export const USDT_BSC_ADDRESS = process.env.REACT_APP_SMART_CONTRACT_BSC_USDT_ADDRESS || "";
export const USDC_BSC_ADDRESS = process.env.REACT_APP_SMART_CONTRACT_BSC_USDC_ADDRESS || "";
export const BUSD_BSC_ADDRESS = process.env.REACT_APP_SMART_CONTRACT_BSC_BUSD_ADDRESS || "";

export const NATIVE_TOKEN_ADDRESS = "0x0000000000000000000000000000000000000000";

export const URLS = {
  HOME: "/dashboard",
  POOLS: "/pools",
  POOL_DETAIL: "/pools/:uuid",
  CREATE_POOL: "/pools/add",
  CONTENTS: "/contents",
  USER: "/user",
  LOGIN: "/login",
};

export const KEY_CACHE = "cache";
export type SessionContextTypes = {
  data: any;
  login: React.Dispatch<any>;
  logout: () => Promise<void>;
};

export enum ACCEPT_CURRENCY {
  BUSD = "BUSD",
  USDT = "USDT",
  USDC = "USDC",
}
export type Currencies = Extract<
  ACCEPT_CURRENCY,
  ACCEPT_CURRENCY.BUSD | ACCEPT_CURRENCY.USDT | ACCEPT_CURRENCY.USDC
>;

export const currencies: { [key in Currencies]: OptionTypes } = {
  [ACCEPT_CURRENCY.BUSD]: {
    label: ACCEPT_CURRENCY.BUSD,
    value: ACCEPT_CURRENCY.BUSD,
  },
  [ACCEPT_CURRENCY.USDC]: {
    label: ACCEPT_CURRENCY.USDC,
    value: ACCEPT_CURRENCY.USDC,
  },
  [ACCEPT_CURRENCY.USDT]: {
    label: ACCEPT_CURRENCY.USDT,
    value: ACCEPT_CURRENCY.USDT,
  },
};

export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
}
export type chainId = Extract<
  ChainId,
  ChainId.BSC_MAINNET | ChainId.BSC_TESTNET | ChainId.MAINNET | ChainId.GOERLI
>;

export enum NETWORK_AVAILABLE {
  ETH = "ETHEREUM",
  BSC = "BSC",
}
export type NetworkAvailable = Extract<
  NETWORK_AVAILABLE,
  NETWORK_AVAILABLE.BSC | NETWORK_AVAILABLE.ETH
>;

export const MAPPING_NETWORK_ID_BY_NAME: any = {
  [NETWORK_AVAILABLE.BSC]: BSC_NETWORK_ID,
  [NETWORK_AVAILABLE.ETH]: ETH_NETWORK_ID,
};

export interface NetworkInfo {
  name: string;
  id: chainId;
  currencies: Array<OptionTypes>;
  [k: string]: any;
}
export const SUPPORTED_NETWORKS: { [key in ChainId]: NetworkInfo } = {
  [ChainId.GOERLI]: {
    id: ChainId.GOERLI,
    name: "Goerli",
    currencies: [currencies[ACCEPT_CURRENCY.USDT], currencies[ACCEPT_CURRENCY.USDC]],
  },
  [ChainId.MAINNET]: {
    id: ChainId.MAINNET,
    name: "Ethereum",
    currencies: [currencies[ACCEPT_CURRENCY.USDT], currencies[ACCEPT_CURRENCY.USDC]],
  },
  [ChainId.BSC_TESTNET]: {
    id: ChainId.BSC_TESTNET,
    name: "BSC Testnet",
    currencies: [currencies[ACCEPT_CURRENCY.USDT], currencies[ACCEPT_CURRENCY.BUSD]],
  },
  [ChainId.BSC_MAINNET]: {
    id: ChainId.BSC_MAINNET,
    name: "BSC Mainnet",
    currencies: [currencies[ACCEPT_CURRENCY.USDT], currencies[ACCEPT_CURRENCY.BUSD]],
  },
};

export const MAPPING_CURRENCY_ADDRESS: {
  [key in NETWORK_AVAILABLE]: any;
} = {
  [NETWORK_AVAILABLE.ETH]: {
    [ACCEPT_CURRENCY.USDT]: USDT_ADDRESS,
    [ACCEPT_CURRENCY.USDC]: USDC_ADDRESS,
  },
  [NETWORK_AVAILABLE.BSC]: {
    [ACCEPT_CURRENCY.USDT]: USDT_BSC_ADDRESS,
    [ACCEPT_CURRENCY.BUSD]: BUSD_BSC_ADDRESS,
  },
};
export const MAPPING_CURRENCY_DECIMALS: any = {
  [NETWORK_AVAILABLE.ETH]: {
    [ACCEPT_CURRENCY.USDT]: 6,
    [ACCEPT_CURRENCY.USDC]: 6,
  },
  [NETWORK_AVAILABLE.BSC]: {
    [ACCEPT_CURRENCY.USDT]: 18,
    [ACCEPT_CURRENCY.BUSD]: 18,
    // [ACCEPT_CURRENCY.USDC]: 18,
  },
};
