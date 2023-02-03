import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { IconButton } from "@mui/material";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import NavLeft from "./NavLeft";
import styles from "./sidebar.module.scss";

const SideBar = () => {
  const { openSidebar, setOpenSidebar } = useContext(AppContext);
  const [loginUser, setLoginUser] = useState<any>({});

  useEffect(() => {
    const user = localStorage.getItem("user") || "{}";
    setLoginUser(JSON.parse(user));
  }, []);

  const handleCloseSidebar = () => {
    setOpenSidebar && setOpenSidebar((prevState: boolean) => !prevState);
    localStorage.setItem("openSidebar", openSidebar + "");
  };

  return (
    <div
      className={clsx(
        "min-w-[316px] min-h-screen bg-[#202020] text-[#8D8D8D] py-5 px-[14px] relative",
        openSidebar && "min-w-[100px] duration-500",
      )}
    >
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          <img
            className="w-12 h-12 mr-[10px] object-cover rounded-full"
            src="/images/default-user-avatar.svg"
            alt=""
          />
          {!openSidebar && (
            <div className="min-w-[180px]">
              <div className={styles.name}>
                {loginUser?.username || "admin"}
              </div>
              <div className="flex items-center tracking-widest text-[#9a9a9a] whitespace-nowrap">
                Verified Profile
                <img
                  className="ml-2"
                  src={"/images/icon-verified.svg"}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <IconButton
          className={clsx(
            "ml-auto p-0 min-w-[40px] w-10 h-10 text-[#9a9a9a]",
            openSidebar && "rotate-180",
          )}
          onClick={handleCloseSidebar}
          color="inherit"
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </div>
      <NavLeft openSidebar={openSidebar} />

      {!openSidebar && (
        <div className="text-12/16 text-center tracking-widest text-[#8d8d8d] absolute bottom-4 left-0 w-full">
          Copyright @Icetea 2023. All rights reserved.
        </div>
      )}
    </div>
  );
};

export default SideBar;
