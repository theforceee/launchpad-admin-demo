import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { SvgIconProps } from "@mui/material/SvgIcon";
import clsx from "clsx";
import React, { ComponentType } from "react";
import { useOutletContext } from "react-router";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SessionContextTypes, URLS } from "../../../constants";

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
    title: "Contents",
    part: URLS.CONTENTS,
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
  const session: SessionContextTypes = useOutletContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Do you want logout?")) {
      return false;
    }

    // logout
    session?.logout();
    navigate(URLS.LOGIN);
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
