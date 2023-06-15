import clsx from "clsx";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { URLS } from "../../../constants";

import iconContent from "../../../assests/icon-content.svg";
import iconPool from "../../../assests/icon-pool.svg";
import iconUser from "../../../assests/icon-user.svg";

type NavItemTypes = {
  title: string;
  part: (typeof URLS)[keyof typeof URLS];
  icon: any;
};

const nav: Array<NavItemTypes> = [
  {
    title: "Home",
    part: URLS.USER,
    icon: iconUser,
  },
  {
    title: "List Pools",
    part: URLS.POOLS,
    icon: iconPool,
  },
  {
    title: "Contents",
    part: URLS.CONTENTS,
    icon: iconContent,
  },
];

const SideBar = () => {
  const [navLeft] = useState(nav);
  const location = useLocation();
  return (
    <div className={clsx("relative min-h-screen w-20 bg-[#D9D9D9] py-5 px-[14px] text-[#8D8D8D]")}>
      <ul className="w-full list-none p-0">
        {/* <a href={URLS.HOME}>
          <img
            className="mr-[10px] mb-10 h-12 w-12 cursor-pointer rounded-full object-cover"
            src="/images/default-user-avatar.svg"
            alt=""
          />
        </a> */}

        {navLeft.map((item, index) => {
          return (
            <li key={index} className={clsx("mb-10 w-full")}>
              <Link
                to={item.part}
                className={clsx(
                  "",
                  location?.pathname === item.part ? "opacity-100" : "opacity-20",
                )}
              >
                <img src={item.icon} alt="" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
