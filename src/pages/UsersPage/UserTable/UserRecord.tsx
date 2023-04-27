import { TableCell, TableRow } from "@mui/material";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { UserTypes } from "..";
import classes from "./table.module.scss";

type UserRecordProps = {
  user: UserTypes;
  index: number;
  viewUserRefHistory?: (address: string) => void;
};

const UserRecord: React.FC<UserRecordProps> = (props: UserRecordProps) => {
  const {
    user = {
      wallet_address: "",
      token_staked: "",
      sheriff_staked: "",
      pioneer_staked: "",
      points: "",
    },
    index,
    viewUserRefHistory,
  } = props;
  const ref = useRef<any>();

  const handleViewHistory = (e: any) => {
    e.preventDefault();
    viewUserRefHistory && viewUserRefHistory(user.wallet_address);
  };

  const onCopyWallet = () => {
    navigator.clipboard.writeText(user.wallet_address);
    toast.success("Wallet Address Copied!");
  };

  return (
    <TableRow ref={ref} className={classes.tableRow} key={user.wallet_address}>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        <div className="flex items-center">
          <span>{user.wallet_address}</span>
          <img
            className="ml-2 cursor-pointer outline-none"
            src="images/icon-copy.svg"
            alt=""
            onClick={onCopyWallet}
          />
        </div>
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {user.token_staked}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {user.sheriff_staked}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {user.points}
      </TableCell>

      <TableCell className={classes.tableCell} align="left">
        <div className={classes.btnView} onClick={handleViewHistory}>
          View
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UserRecord;
