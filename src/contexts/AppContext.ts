import { createContext, Dispatch, SetStateAction } from "react";

export type AppContextType = {
  now?: string;
  userLogin?: any;
  setUserLogin?: Dispatch<SetStateAction<any>>;
  isWrongChain?: boolean;
  setIsWrongChain?: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({});
