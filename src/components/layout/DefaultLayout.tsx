import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import SideBar from "./SideBar";
import { InjectedConnector } from "@wagmi/core";
import { useAccount, useConnect } from "wagmi";

type LayoutProps = {
  children?: React.ReactElement;
};
const DefaultLayout = (props: LayoutProps) => {
  const { isWrongChain } = useContext(AppContext);
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (!address) {
      console.log("connectt");
      connect();
    }
  }, [address]);

  return (
    <div className="flex">
      <SideBar />
      <div className="relative flex flex-1 bg-[#F9F9F9] px-8 py-16">
        {props.children}

        {isWrongChain && (
          <div className="absolute left-0 top-3 flex h-10 w-full items-center justify-center bg-[#5b0712fa] text-center text-white">
            {`Your Current Network does not match with Pool Network`}
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultLayout;
