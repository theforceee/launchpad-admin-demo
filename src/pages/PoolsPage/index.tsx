import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import TableWithPagination from "../../components/base/TableWithPagination";
import {
  PagingationTypes,
  TableHeaderTypes,
} from "../../components/base/TableWithPagination/constants";
import { DefaultLayout } from "../../components/layout";
import { URLS } from "../../constants";
import { RegisterInputs } from "../../constants/poolDetail";
import { get } from "../../requests";
import PoolRecord from "./PoolRecord";

const tableHeaders: Array<TableHeaderTypes> = [
  {
    value: 1,
    label: "Project’s Name",
    sortable: true,
  },
  {
    value: 2,
    label: "Start Time",
    sortable: true,
  },
  {
    value: 3,
    label: "End Time",
    sortable: true,
  },
  {
    value: 4,
    label: "Chain",
    sortable: true,
  },
  {
    value: 5,
    label: "Status",
    sortable: true,
  },
];

const PoolsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchInput] = useState<string>("");
  const [pagination, setPagination] = useState<PagingationTypes>({
    currentPage: 1,
    rowsPerPage: 10,
    total: 0,
  });
  const [pools, setPools] = useState<Array<RegisterInputs>>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await get(`pool?page=${pagination.currentPage}`);
      if (res.status !== 200) {
        toast.error("ERROR: Fail to get list pool");
        return;
      }
      const resData = res.data;
      setPools(resData?.data || []);
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

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <div className="mb-10 flex">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Project Name, Token Name"
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

          <Button
            size="large"
            variant="contained"
            className="!ml-auto h-fit"
            onClick={() => navigate(URLS.CREATE_POOL)}
          >
            Create Pool
          </Button>
        </div>

        <div className="w-full">
          <TableWithPagination
            dataTable={pools}
            pagination={pagination}
            setPagination={setPagination}
            tableHeaders={tableHeaders}
            TableRecord={PoolRecord}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PoolsPage;
