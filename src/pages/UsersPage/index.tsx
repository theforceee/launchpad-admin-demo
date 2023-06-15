import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import TableWithPagination from "../../components/base/TableWithPagination";
import {
  PagingationTypes,
  TableHeaderTypes,
} from "../../components/base/TableWithPagination/constants";
import { DefaultLayout } from "../../components/layout";
import { get } from "../../requests";
import UserRecord from "./UserRecord";
import fileDownload from "js-file-download";
import moment from "moment";

const tableHeaders: Array<TableHeaderTypes> = [
  // {
  //   value: -1,
  //   label: "No",
  // },
  {
    value: 1,
    label: "Wallet Address",
  },
  {
    value: 2,
    label: "$BLAZE Staked",
    sortable: true,
  },
  {
    value: 3,
    label: "Sheriff NFTs Staked",
    sortable: true,
  },
  {
    value: 4,
    label: "Pioneer NFTs Staked",
    sortable: true,
  },
  {
    value: 5,
    label: "Leaderboard Points",
    sortable: true,
  },
];

const UsersPage = () => {
  const [searchTerm, setSearchInput] = useState<string>("");
  const [pagination, setPagination] = useState<PagingationTypes>({
    currentPage: 1,
    rowsPerPage: 10,
    total: 0,
  });
  const [users, setUsers] = useState<Array<any>>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await get(`account/users?page=${pagination.currentPage}`);
      if (res.status !== 200) {
        toast.error("ERROR: Fail to get list pool");
        return;
      }
      const resData = res.data;
      setUsers(resData?.data || []);
      setPagination((prevState) => ({
        ...prevState,
        total: resData?.meta?.total,
      }));
    };
    getData();
  }, [pagination.currentPage]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleExportCsv = async () => {
    try {
      const res = await get(`account/users/exporty`, { isCSV: true });

      if (!res?.ok) {
        toast.error("ERROR: export csv failed");
        return;
      }
      fileDownload(await res.blob(), `trailblaze_users_${moment().format("DD_MM_YYYY")}.csv`);
      toast.success("SUCCESS: file has been exported");
    } catch (error: any) {
      toast.error("ERROR: export csv failed");
      console.log("Fail to export: ", error);
    }
  };

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col rounded-xl bg-white px-6 py-5 shadow-lg">
        <div className="mb-10 flex items-center justify-between">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Name, wallet address"
            className="w-full max-w-3xl"
            // value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <button
            onClick={handleExportCsv}
            className="flex h-[30px]  items-center justify-center rounded-md bg-[#606060] px-5 text-white"
          >
            Export to CSV
          </button>
        </div>

        <div className="w-full">
          <TableWithPagination
            dataTable={users}
            pagination={pagination}
            setPagination={setPagination}
            tableHeaders={tableHeaders}
            TableRecord={UserRecord}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UsersPage;
