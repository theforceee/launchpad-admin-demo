import { OptionTypes } from "./poolDetail";

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

export const acceptedCurrencies: Array<OptionTypes> = [
  {
    label: "NATIVE",
    value: "NATIVE",
  },
  {
    label: "BUSD",
    value: "BUSD",
  },
  {
    label: "USDC",
    value: "USDC",
  },
  {
    label: "USDT",
    value: "USDT",
  },
];
