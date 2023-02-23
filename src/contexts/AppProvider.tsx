import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { AppContext } from "./AppContext";

const AppProvider = (props: any) => {
  const { address } = useAccount();
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [userLogin, setUserLogin] = useState<{
    address: string;
    token: string | undefined;
  }>();

  useEffect(() => {
    console.log("AppProvider", address, userLogin);
    const localState = localStorage.getItem("openSidebar");
    const authToken = localStorage.getItem(`sig_${address}`);
    address &&
      authToken &&
      setUserLogin({
        address,
        token: authToken,
      });
    setOpenSidebar(localState === "false");
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
