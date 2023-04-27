import { TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import React, { useRef } from "react";
import { RegisterInputs } from "../../../constants/poolDetail";
import { displayDateTime } from "../../../utils";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "gray",
    color: theme.palette.common.white,
    fontSize: 16,
    borderRight: "2px solid white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#3a38bb",
    fontWeight: 600,
    borderRight: "2px solid white",
    // display: "flex",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#ffe664 !important",
    transition: "0.2s all",
  },
  backgroundColor: "#f5f5f5",
  "&:nth-of-type(odd)": {
    backgroundColor: "#d9d9d9",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));

type PoolRecordProps = {
  pool?: RegisterInputs;
};

const PoolRecord: React.FC<PoolRecordProps> = (props: PoolRecordProps) => {
  const { pool } = props;
  const ref = useRef<any>();

  const getPoolStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-400";
      case "Queued":
        return "bg-orange-400";
      case "Ended":
        return "bg-red-500";
      default:
        return "bg-green-400";
    }
  };

  console.log("dataTable", getPoolStatusColor(pool?.status || ""));
  if (!pool) return <></>;

  return (
    <StyledTableRow ref={ref} key={pool.slug}>
      <StyledTableCell align="left">{pool.title}</StyledTableCell>
      <StyledTableCell align="left">
        {displayDateTime(pool.start_join_time)}
      </StyledTableCell>
      <StyledTableCell align="left">
        {displayDateTime(pool.end_join_time)}
      </StyledTableCell>
      <StyledTableCell align="left">{pool.network}</StyledTableCell>

      <StyledTableCell align="left">
        <p className="flex items-center  m-0">
          <span
            className={clsx(
              "rounded-full w-3 h-3",
              getPoolStatusColor(pool.status),
            )}
          ></span>
          <span className="ml-2">{pool.status}</span>
        </p>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default PoolRecord;
