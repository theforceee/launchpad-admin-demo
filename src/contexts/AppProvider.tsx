import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = (props: any) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  useEffect(() => {
    const localState = localStorage.getItem("openSidebar");
    setOpenSidebar(localState === "false");
  }, []);

  return (
    <AppContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
