import clsx from "clsx";
import { PoolTabProps } from ".";
import { useState } from "react";
import {
  PagingationTypes,
  TableHeaderTypes,
} from "../../../components/base/TableWithPagination/constants";
import TableWithPagination from "../../../components/base/TableWithPagination";
import UserPoolRecord from "./UserPoolRecord";

type UserNavTypes = {
  label: string;
  value: number;
};
const userNav: Array<UserNavTypes> = [
  {
    label: "Participants",
    value: 1,
  },
  {
    label: "Allocation Winners",
    value: 2,
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
  const { show = false } = props;
  const [selectedUserNav, setSelectedUserNav] = useState<number>(1);
  const [pagination, setPagination] = useState<PagingationTypes>({
    currentPage: 0,
    rowsPerPage: 0,
    total: 0,
  });

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

        <div className="mt-10 flex w-full">
          <TableWithPagination
            dataTable={[]}
            pagination={pagination}
            setPagination={setPagination}
            tableHeaders={tableHeaders}
            TableRecord={UserPoolRecord}
          />
        </div>
      </div>
    </div>
  );
};

export default TabUserList;
