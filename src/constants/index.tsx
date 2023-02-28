export const URLS = {
  HOME: "/dashboard",
  POOLS: "/pools",
  TBA_POOLS: "/tba-pools",
  STAKING_POOLS: "/staking-pools",
  USERS: "/users",
  LOGIN: "/login",
};

export const KEY_CACHE = "cache";
export type SessionContextTypes = {
  data: any;
  login: React.Dispatch<any>;
  logout: () => Promise<void>;
};
