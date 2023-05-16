import React, { useRef } from "react";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/base/TableWithPagination";

type UserRecordProps = {
  dataRecord?: any;
};
const UserPoolRecord: React.FC<UserRecordProps> = (props: UserRecordProps) => {
  const { dataRecord: user } = props;
  console.log("user", user);
  const ref = useRef<any>();

  if (!user) return <></>;

  return (
    <StyledTableRow ref={ref} key={user.id}>
      <StyledTableCell align="left">{user.id}</StyledTableCell>
      <StyledTableCell align="left">{user.wallet_address}</StyledTableCell>
      <StyledTableCell align="left">{user.points}</StyledTableCell>
    </StyledTableRow>
  );
};

export default UserPoolRecord;
