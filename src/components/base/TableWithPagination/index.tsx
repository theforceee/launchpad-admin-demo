import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import React from "react";
import PaginationCustom from "../PaginationCustom";
import { TableHeaderTypes, TableWithPaginationProps } from "./constants";
import styles from "./table.module.scss";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

export const StyledTableRow = styled(TableRow)(() => ({
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

const TableWithPagination = (props: TableWithPaginationProps) => {
  const { dataTable, tableHeaders, pagination, setPagination, TableRecord } = props;

  const handleSort = (headerValue: number) => {
    console.log("sort", headerValue);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination((currentState) => ({
      ...currentState,
      currentPage: value,
    }));
  };
  return (
    <>
      <div className="flex w-full flex-col">
        <TableContainer component={Paper} className="!rounded-lg !shadow-none">
          <Table className="text-14/20">
            <TableHead>
              <TableRow>
                {tableHeaders.map((tableHeader: TableHeaderTypes) => (
                  <StyledTableCell key={tableHeader.value} className="pb-6 pr-7">
                    <p className="m-0 flex items-center justify-between">
                      <span className="pl-5">{tableHeader.label}</span>
                      {tableHeader.sortable && (
                        <img
                          src="/images/icon-sort.svg"
                          alt=""
                          onClick={() => handleSort(tableHeader.value)}
                          className="ml-1 h-4 w-auto cursor-pointer"
                        />
                      )}
                    </p>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={styles.tableBody}>
              {dataTable && dataTable.length > 0 ? (
                dataTable.map((dataRecord: any, index: number) => (
                  <TableRecord dataRecord={dataRecord} key={index} />
                ))
              ) : (
                <div className="text-20/28">Empty</div>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="ml-auto">
          <PaginationCustom pagination={pagination} onChange={handleChange}></PaginationCustom>
        </div>
      </div>
    </>
  );
};

export default TableWithPagination;
