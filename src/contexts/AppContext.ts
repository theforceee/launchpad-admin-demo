import { createContext, Dispatch, SetStateAction } from "react";

export type AppContextType = {
  now?: string;
  userLogin?: any;
  setUserLogin?: Dispatch<SetStateAction<any>>;
};

export const AppContext = createContext<AppContextType>({});
