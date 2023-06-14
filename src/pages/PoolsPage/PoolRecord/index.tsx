import clsx from "clsx";
import React, { useRef } from "react";
import { StyledTableCell, StyledTableRow } from "../../../components/base/TableWithPagination";
import { displayDateTime } from "../../../utils";
import { useNavigate } from "react-router";

type PoolRecordProps = {
  dataRecord?: any;
};

const PoolRecord: React.FC<PoolRecordProps> = (props: PoolRecordProps) => {
  const { dataRecord: pool } = props;
  const ref = useRef<any>();
  const navigate = useNavigate();

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

  const handleSelectPool = (id: number) => {
    if (!id) return;
    navigate(id + "");
  };

  if (!pool) return <></>;

  return (
    <StyledTableRow ref={ref} key={pool.slug} onClick={() => handleSelectPool(pool.id)}>
      <StyledTableCell align="left">{pool.name}</StyledTableCell>
      <StyledTableCell align="left">{displayDateTime(pool.start_join_time)}</StyledTableCell>
      <StyledTableCell align="left">{displayDateTime(pool.end_join_time)}</StyledTableCell>
      <StyledTableCell align="left">{pool?.token?.network}</StyledTableCell>

      <StyledTableCell align="left">
        <p className="m-0 flex  items-center">
          <span className={clsx("h-3 w-3 rounded-full", getPoolStatusColor(pool.status))}></span>
          <span className="ml-2">{pool.status}</span>
        </p>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default PoolRecord;
