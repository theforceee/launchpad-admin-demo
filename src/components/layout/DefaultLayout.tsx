import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SideBar from "./SideBar";

type LayoutProps = {
  children?: React.ReactElement;
};
const DefaultLayout = (props: LayoutProps) => {
  const { isWrongChain } = useContext(AppContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex w-full bg-[#F9F9F9] px-8 py-16">
        {props.children}

        {isWrongChain && (
          <div className="absolute top-3 flex h-10 w-full items-center justify-center bg-[#5b0712fa] text-center text-white">
            {`Your Current Network does not match with Pool Network`}
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultLayout;
