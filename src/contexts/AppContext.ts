import { createContext, Dispatch, SetStateAction } from "react";

export type AppContextType = {
  now?: string;
  openSidebar?: boolean;
  setOpenSidebar?: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({});
