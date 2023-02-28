import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { KEY_CACHE } from "../constants";
import { AppContext } from "./AppContext";

const AppProvider = (props: any) => {
  const { address } = useAccount();
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [userLogin, setUserLogin] = useState<{
    address: string;
    token: string | undefined;
  }>();

  useEffect(() => {
    const localState = localStorage.getItem("openSidebar");
    setOpenSidebar(localState === "false");

    const authToken = localStorage.getItem(KEY_CACHE);
    address &&
      authToken &&
      setUserLogin({
        address,
        token: authToken,
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ openSidebar, setOpenSidebar, setUserLogin, userLogin }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
