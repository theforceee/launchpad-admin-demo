import { createContext, Dispatch, SetStateAction } from "react";

export type AppContextType = {
  now?: string;
  userLogin?: any;
  setUserLogin?: Dispatch<SetStateAction<any>>;
  openSidebar?: boolean;
  setOpenSidebar?: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({});
