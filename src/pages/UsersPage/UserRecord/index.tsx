import { ethers } from "ethers";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { StyledTableCell, StyledTableRow } from "../../../components/base/TableWithPagination";
import { formatCurrency } from "../../../utils";

type UserRecordProps = {
  dataRecord?: any;
};

const UserRecord: React.FC<UserRecordProps> = (props: UserRecordProps) => {
  const { dataRecord: pool } = props;
  const ref = useRef<any>();
  const navigate = useNavigate();

  const handleSelectPool = (wallet_address: string | undefined) => {
    if (!wallet_address) return;
    navigate(wallet_address + "");
  };

  if (!pool) return <></>;

  return (
    <StyledTableRow ref={ref} key={pool.slug} onClick={() => handleSelectPool(pool.wallet_address)}>
      {/* <StyledTableCell align="left">{1}</StyledTableCell> */}
      <StyledTableCell align="left">{pool.wallet_address || "N/A"}</StyledTableCell>
      <StyledTableCell align="left">
        {formatCurrency(ethers.utils.formatEther(pool.token_amount || 0))}
      </StyledTableCell>
      <StyledTableCell align="left">{pool.sheriff_amount}</StyledTableCell>
      <StyledTableCell align="left">{pool.pioneer_amount}</StyledTableCell>
      <StyledTableCell align="left">{formatCurrency(pool.point)}</StyledTableCell>
    </StyledTableRow>
  );
};

export default UserRecord;
