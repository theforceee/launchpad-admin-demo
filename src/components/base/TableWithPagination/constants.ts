export type TableHeaderTypes = {
  value: number;
  label: string;
  sortable?: boolean;
};

export type PagingationTypes = {
  currentPage: number;
  total: number;
  rowsPerPage: number;
};

export type TableWithPaginationProps = {
  dataTable: Array<any>;
  tableHeaders: Array<TableHeaderTypes>;
  pagination: PagingationTypes;
  setPagination: React.Dispatch<React.SetStateAction<PagingationTypes>>;
  TableRecord: any;
};

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
