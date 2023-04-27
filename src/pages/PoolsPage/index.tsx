import { DefaultLayout } from "../../components/layout";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { URLS } from "../../constants";
import {
  PagingationTypes,
  TableHeaderTypes,
} from "../../components/base/TableWithPagination/constants";
import TableWithPagination from "../../components/base/TableWithPagination";
import PoolRecord from "./PoolRecord";
import { RegisterInputs, defaultEmptyPool } from "../../constants/poolDetail";

let dataTable: Array<RegisterInputs> = [];

for (let i = 0; i < 10; i++) {
  dataTable = [
    ...dataTable,
    {
      ...defaultEmptyPool,
      slug: "" + i,
      title: "This is an example about very long project's name",
      start_join_time: "1680707600",
      end_join_time: "1680907600",
      network: "ETH",
      status: ["Active", "Queued", "Ended"][Math.round(Math.random() * 2)],
    },
  ];
}

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
    currentPage: 0,
    rowsPerPage: 0,
    total: 0,
  });

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col w-full">
        <div className="mb-10 flex">
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

          <Button
            size="large"
            variant="contained"
            className="h-fit !ml-auto"
            onClick={() => navigate(URLS.CREATE_POOL)}
          >
            Create Pool
          </Button>
        </div>

        <div className="w-full">
          <TableWithPagination
            dataTable={dataTable}
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
