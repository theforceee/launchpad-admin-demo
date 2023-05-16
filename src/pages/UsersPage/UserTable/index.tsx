import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserTypes } from "..";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/base/TableWithPagination";
import styles from "./table.module.scss";

const tableHeaders = [
  "No",
  "Wallet Address",
  "$token Staked",
  "Sheriff NFTs Staked",
  "Pioneer NFTs Staked",
  "Leaderboard Points",
];

const UserTable = (props: any) => {
  const { currentPage, search, dataTable } = props;
  const [sortField, setSortField] = useState<
    "token_staked" | "sheriff_staked" | "pioneer_staked" | "points" | null
  >(null);
  // sortType: true = "asc", false = "desc"
  const [sortType, setSortType] = useState<{
    token_staked: boolean;
    sheriff_staked: boolean;
    pioneer_staked: boolean;
    points: boolean;
  }>({
    token_staked: true,
    sheriff_staked: true,
    pioneer_staked: true,
    points: true,
  });

  useEffect(() => {
    const type = sortField
      ? sortType[sortField]
        ? "asc"
        : "desc"
      : (undefined as any);
    console.log("type sortt", sortField, type);
  }, [currentPage, search, sortField, sortType]);

  const handleSort = (headerIndex: number) => {
    // index of tableHeaders[]
    switch (headerIndex) {
      case 2:
        setSortField("token_staked");
        setSortType({
          ...sortType,
          token_staked: !sortType.token_staked,
        });
        break;
      case 3:
        setSortField("sheriff_staked");
        setSortType({
          ...sortType,
          sheriff_staked: !sortType.sheriff_staked,
        });
        break;
      case 4:
        setSortField("pioneer_staked");
        setSortType({
          ...sortType,
          pioneer_staked: !sortType.pioneer_staked,
        });
        break;
      case 5:
        setSortField("points");
        setSortType({
          ...sortType,
          points: !sortType.points,
        });
        break;
      default:
        setSortField(null);
        break;
    }
  };

  const onCopyWallet = (user: UserTypes) => {
    navigator.clipboard.writeText(user.wallet_address);
    toast.success("Wallet Address Copied!");
  };

  return (
    <>
      <TableContainer component={Paper} className="!shadow-none !rounded-lg">
        <Table className="text-14/20">
          <TableHead>
            <TableRow>
              {tableHeaders.map((tableHeader: string, index: number) => (
                <StyledTableCell key={index} className="pb-6 pr-7">
                  <div className="flex">
                    {tableHeader}
                    {[2, 3, 4, 5].includes(index) && (
                      <img
                        src="/images/icon-sort.svg"
                        alt=""
                        onClick={() => handleSort(index)}
                        className="w-4 h-5 ml-1 cursor-pointer"
                      />
                    )}
                  </div>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tableBody}>
            {dataTable &&
              dataTable.length > 0 &&
              dataTable.map((user: UserTypes, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left">{index}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex">
                      <span>{user.wallet_address}</span>
                      <img
                        className="ml-2 cursor-pointer outline-none"
                        src="images/icon-copy.svg"
                        alt=""
                        onClick={() => onCopyWallet(user)}
                      />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.token_staked}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.sheriff_staked}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.pioneer_staked}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.points}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
