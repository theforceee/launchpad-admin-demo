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
      case "QUEUED":
        return "bg-orange-400";
      case "ENDED":
        return "bg-red-500";
      case "LIVE":
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
      <StyledTableCell align="left">
        <div className="flex justify-between">
          <p className="ml-5 font-bold">{pool.name}</p>
          <div className="bg-purple-500 px-5 text-white">IDO</div>
        </div>
      </StyledTableCell>
      <StyledTableCell align="center">{displayDateTime(pool.start_join_time)}</StyledTableCell>
      <StyledTableCell align="center">{displayDateTime(pool.end_join_time)}</StyledTableCell>
      <StyledTableCell align="left">
        <div className="flex justify-center">
          <span className="w-20">{pool?.token?.network}</span>
        </div>
      </StyledTableCell>

      <StyledTableCell align="center">
        <div className="flex w-full justify-center">
          <p className="m-0 flex w-20 items-center">
            <span
              className={clsx("h-3 w-3 rounded-full text-center", getPoolStatusColor(pool.status))}
            ></span>
            <span className="ml-2 text-center capitalize">{pool.status?.toLowerCase()}</span>
          </p>
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default PoolRecord;
