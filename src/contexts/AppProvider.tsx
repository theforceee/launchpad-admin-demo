import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { KEY_CACHE } from "../constants";
import { AppContext } from "./AppContext";

const AppProvider = (props: any) => {
  const { address } = useAccount();
  const [userLogin, setUserLogin] = useState<{
    address: string;
    token: string | undefined;
  }>();

  useEffect(() => {
    const authToken = localStorage.getItem(KEY_CACHE);
    address &&
      authToken &&
      setUserLogin({
        address,
        token: authToken,
      });
  }, []);

  return (
    <AppContext.Provider value={{ setUserLogin, userLogin }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
