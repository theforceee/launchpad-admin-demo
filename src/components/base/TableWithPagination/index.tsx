import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import React from "react";
import {
  TableHeaderTypes,
  TablePaginationActionsProps,
  TableWithPaginationProps,
} from "./constants";
import styles from "./table.module.scss";

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

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const TableWithPagination = (props: TableWithPaginationProps) => {
  const { dataTable, tableHeaders, pagination, setPagination, TableRecord } =
    props;

  const handleSort = (headerValue: number) => {
    console.log("sort", headerValue);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPagination((currentState) => ({
      ...currentState,
      currentPage: newPage,
    }));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPagination((currentState) => ({
      ...currentState,
      currentPage: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    }));
  };

  return (
    <>
      <div className="w-full flex flex-col">
        <TableContainer component={Paper} className="!shadow-none !rounded-lg">
          <Table className="text-14/20">
            <TableHead>
              <TableRow>
                {tableHeaders.map((tableHeader: TableHeaderTypes) => (
                  <StyledTableCell
                    key={tableHeader.value}
                    className="pb-6 pr-7"
                  >
                    <p className="flex justify-between m-0">
                      <span>{tableHeader.label}</span>
                      {tableHeader.sortable && (
                        <img
                          src="/images/icon-sort.svg"
                          alt=""
                          onClick={() => handleSort(tableHeader.value)}
                          className="w-4 h-5 ml-1 cursor-pointer"
                        />
                      )}
                    </p>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={styles.tableBody}>
              {dataTable &&
                dataTable.length > 0 &&
                dataTable.map((dataRecord: any, index: number) => (
                  <TableRecord pool={dataRecord} key={index} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="ml-auto">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            colSpan={3}
            count={dataTable?.length}
            rowsPerPage={pagination?.rowsPerPage || 10}
            page={pagination?.currentPage || 1}
            sx={{ borderBottom: 0 }}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              // native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </div>
      </div>
    </>
  );
};

export default TableWithPagination;
