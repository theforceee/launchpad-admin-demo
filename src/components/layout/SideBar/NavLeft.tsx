import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import LogoutIcon from "@mui/icons-material/Logout";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { SvgIconProps } from "@mui/material/SvgIcon";
import clsx from "clsx";
import React, { ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";
import { URLS } from "../../../constants";

type NavItemTypes = {
  title: string;
  part: (typeof URLS)[keyof typeof URLS];
  icon: ComponentType<SvgIconProps>;
};

const nav: Array<NavItemTypes> = [
  {
    title: "Home",
    part: URLS.HOME,
    icon: DashboardIcon,
  },
  {
    title: "List Pools",
    part: URLS.POOLS,
    icon: FeaturedPlayListIcon,
  },
  {
    title: "List TBA Pools",
    part: URLS.TBA_POOLS,
    icon: SummarizeIcon,
  },
  {
    title: "List Staking Pools",
    part: URLS.STAKING_POOLS,
    icon: FactCheckIcon,
  },
  {
    title: "List Users",
    part: URLS.USERS,
    icon: SupervisorAccountIcon,
  },
];

const NavLeft = (props: any) => {
  const { openSidebar } = props;
  const [navLeft] = React.useState(nav);
  const location = useLocation();

  const logoutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Do you want logout?")) {
      return false;
    }

    // logout
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <ul className="w-full list-none p-0">
      {navLeft.map((item, index) => {
        return (
          <li key={index} className={clsx("w-full mb-1")}>
            <Link
              to={item.part}
              className={clsx(
                "flex items-center rounded-xl min-h-[74px] p-5 text-16/20 text-[#8d8d8d] duration-300 no-underline hover:bg-white/10 hover:text-white",
                location?.pathname === item.part &&
                  "bg-white/10 text-[#FFCC00]",
              )}
            >
              <item.icon
                className={clsx(
                  "w-[30px] h-[30px] mr-5",
                  openSidebar && "mr-auto m-auto",
                )}
              />
              {!openSidebar && item.title}
            </Link>
          </li>
        );
      })}

      <li className="w-full mb-1 cursor-pointer">
        <div
          onClick={logoutUser}
          className="flex items-center rounded-xl min-h-[74px] p-5 text-16/20 text-[#8d8d8d] duration-300 no-underline hover:bg-white/10 hover:text-white"
        >
          <LogoutIcon
            className={clsx(
              "w-[30px] h-[30px] mr-5",
              openSidebar && "mr-auto m-auto",
            )}
          />
          {!openSidebar && "Logout"}
        </div>
      </li>
    </ul>
  );
};

export default NavLeft;
