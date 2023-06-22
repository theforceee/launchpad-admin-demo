import Pagination from "@mui/material/Pagination";
const PaginationCustom = (props: any) => {
  const { pagination, onChange } = props;
  const firstItem = pagination.currentPage * pagination.rowsPerPage - pagination.rowsPerPage + 1;
  const lastItem = pagination.currentPage * pagination.rowsPerPage;
  return (
    <>
      <Pagination
        className="mt-5"
        count={Math.ceil(Number(pagination.total / pagination.rowsPerPage))}
        page={pagination?.currentPage}
        onChange={onChange}
        shape="circular"
      ></Pagination>
      <p className="mt-5 text-right">
        <strong>{firstItem}</strong> -{" "}
        <strong> {lastItem > pagination.total ? pagination.total : lastItem}</strong> in {""}
        <strong>{pagination.total} </strong> Result
      </p>
    </>
  );
};

export default PaginationCustom;
