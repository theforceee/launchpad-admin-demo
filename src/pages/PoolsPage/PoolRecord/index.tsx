import clsx from "clsx";
import React, { useRef } from "react";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/base/TableWithPagination";
import { RegisterInputs } from "../../../constants/poolDetail";
import { displayDateTime } from "../../../utils";

type PoolRecordProps = {
  dataRecord?: RegisterInputs;
};

const PoolRecord: React.FC<PoolRecordProps> = (props: PoolRecordProps) => {
  const { dataRecord: pool } = props;
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
