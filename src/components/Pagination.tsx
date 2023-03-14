import Pagination from '@mui/material/Pagination';

function PaginationTor({
  page,
  loading,
  count,
  handleChange,
}: {
  page: number;
  loading: boolean;
  count: number;
  handleChange: (event: React.ChangeEvent<unknown>, pageNum: number) => void;
}) {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      color="primary"
      size="large"
      showFirstButton
      showLastButton
      disabled={loading}
    />
  );
}

export default PaginationTor;