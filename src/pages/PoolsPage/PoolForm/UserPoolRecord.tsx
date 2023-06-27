import React, { useRef } from "react";
import { StyledTableCell, StyledTableRow } from "../../../components/base/TableWithPagination";
import { formatCurrency } from "../../../utils";

type UserRecordProps = {
  dataRecord?: any;
};
const UserPoolRecord: React.FC<UserRecordProps> = (props: UserRecordProps) => {
  const { dataRecord: user } = props;
  const ref = useRef<any>();

  if (!user) return <></>;

  return (
    <StyledTableRow ref={ref} key={user.id}>
      <StyledTableCell align="left">{user.id}</StyledTableCell>
      <StyledTableCell align="left">{user.wallet_address}</StyledTableCell>
      <StyledTableCell align="left">{formatCurrency(user.point)}</StyledTableCell>
    </StyledTableRow>
  );
};

export default UserPoolRecord;
