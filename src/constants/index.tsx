import { OptionTypes } from "./poolDetail";

export const IDO_POOL_FACTORY_SMART_CONTRACT =
  process.env.REACT_APP_SMART_CONTRACT_PRESALE_FACTORY_ADDRESS || "";
export const IDO_POOL_FACTORY_BSC_SMART_CONTRACT =
  process.env.REACT_APP_SMART_CONTRACT_BSC_PRESALE_FACTORY_ADDRESS || "";

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

export const ACCEPT_CURRENCY = {
  BUSD: "BUSD",
  USDT: "USDT",
  USDC: "USDC",
};

export const acceptedCurrencies: Array<OptionTypes> = [
  {
    label: "NATIVE",
    value: "NATIVE",
  },
  {
    label: "BUSD",
    value: ACCEPT_CURRENCY.BUSD,
  },
  {
    label: "USDC",
    value: ACCEPT_CURRENCY.USDC,
  },
  {
    label: "USDT",
    value: ACCEPT_CURRENCY.USDT,
  },
];

export const NETWORK_AVAILABLE = {
  ETH: "ETH",
  BSC: "BSC",
};

export const MAPPING_CURRENCY_ADDRESS: any = {
  [NETWORK_AVAILABLE.ETH]: {
    eth: NATIVE_TOKEN_ADDRESS,
    native: NATIVE_TOKEN_ADDRESS,
    [ACCEPT_CURRENCY.USDT]: USDT_ADDRESS,
    [ACCEPT_CURRENCY.USDC]: USDC_ADDRESS,
  },
  [NETWORK_AVAILABLE.BSC]: {
    native: NATIVE_TOKEN_ADDRESS,
    [ACCEPT_CURRENCY.USDT]: USDT_BSC_ADDRESS,
    [ACCEPT_CURRENCY.USDC]: USDC_BSC_ADDRESS,
    [ACCEPT_CURRENCY.BUSD]: BUSD_BSC_ADDRESS,
  },
};
export const MAPPING_CURRENCY_DECIMALS: any = {
  [NETWORK_AVAILABLE.ETH]: {
    eth: 18,
    native: 18,
    [ACCEPT_CURRENCY.USDT]: 6,
    [ACCEPT_CURRENCY.USDC]: 6,
  },
  [NETWORK_AVAILABLE.BSC]: {
    native: NATIVE_TOKEN_ADDRESS,
    [ACCEPT_CURRENCY.USDT]: 18,
    [ACCEPT_CURRENCY.USDC]: 18,
    [ACCEPT_CURRENCY.BUSD]: 18,
  },
};
