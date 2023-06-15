import clsx from "clsx";
import { PoolTabProps } from ".";
import { useEffect, useState } from "react";
import {
  PagingationTypes,
  TableHeaderTypes,
} from "../../../components/base/TableWithPagination/constants";
import TableWithPagination from "../../../components/base/TableWithPagination";
import UserPoolRecord from "./UserPoolRecord";
import { get } from "../../../requests";
import { toast } from "react-toastify";

type UserNavTypes = {
  label: string;
  value: number;
};
const TAB_WINNER = 2;
const TAB_WHITELIST = 1;

const userNav: Array<UserNavTypes> = [
  {
    label: "Participants",
    value: TAB_WHITELIST,
  },
  {
    label: "Allocation Winners",
    value: TAB_WINNER,
  },
];

const tableHeaders: Array<TableHeaderTypes> = [
  {
    value: 1,
    label: "No.",
  },
  {
    value: 2,
    label: "Wallet Address",
  },
  {
    value: 3,
    label: "Blaze Points",
  },
];

const TabUserList = (props: PoolTabProps) => {
  const { show = false, poolData } = props;
  const [selectedUserNav, setSelectedUserNav] = useState<number>(TAB_WHITELIST);
  const [pagingWinners, setPagingWinners] = useState<PagingationTypes>({
    currentPage: 0,
    rowsPerPage: 0,
    total: 0,
  });
  const [pagingWhitelist, setPagingWhitelist] = useState<PagingationTypes>({
    currentPage: 0,
    rowsPerPage: 0,
    total: 0,
  });

  const [dataWinners, setDataWinners] = useState<any[]>([]);
  const [dataWhitelist, setDataWhitelist] = useState<any[]>([]);

  useEffect(() => {
    if (!poolData?.id) return;
    const getDataWinner = async () => {
      const winnerRes = await get(`pool/${poolData.id}/winner`);
      console.log(winnerRes);

      if (winnerRes.status !== 200) {
        toast.error("ERROR: Fail to fetch winners");
        return;
      }
      setDataWinners(winnerRes?.data?.data || []);
    };

    const getDataWhitelist = async () => {
      const whitelistRes = await get(`pool/${poolData.id}/whitelist`);
      console.log(whitelistRes);

      if (whitelistRes.status !== 200) {
        toast.error("ERROR: Fail to fetch whitelists");
        return;
      }
      setDataWhitelist(whitelistRes?.data?.data || []);
    };

    getDataWhitelist();
    getDataWinner();
  }, [poolData?.id]);

  const handleSelectNav = (nav: number) => {
    setSelectedUserNav(nav);
  };

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="flex flex-col">
        <div className="flex">
          {userNav.map((item: UserNavTypes) => (
            <div
              key={item.value}
              className={clsx(
                "flex w-[180px] cursor-pointer items-center justify-center py-3 font-semibold",
                selectedUserNav === item.value
                  ? "bg-gray-400 text-black"
                  : "bg-gray-300 text-[#8D8C8C]",
              )}
              onClick={() => handleSelectNav(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className={clsx("mt-10 w-full", selectedUserNav === TAB_WINNER ? "hidden" : "flex")}>
          <TableWithPagination
            dataTable={dataWhitelist}
            pagination={pagingWhitelist}
            setPagination={setPagingWhitelist}
            tableHeaders={tableHeaders}
            TableRecord={UserPoolRecord}
          />
        </div>

        <div
          className={clsx("mt-10 w-full", selectedUserNav === TAB_WHITELIST ? "hidden" : "flex")}
        >
          <TableWithPagination
            dataTable={dataWinners}
            pagination={pagingWinners}
            setPagination={setPagingWinners}
            tableHeaders={tableHeaders}
            TableRecord={UserPoolRecord}
          />
        </div>
      </div>
    </div>
  );
};

export default TabUserList;
