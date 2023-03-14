import { Stack, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBooks, searchBooksCleanup } from '../store/actions/searchBooks';
import PaginationTor from './Pagination';

function SearchInput({
  value,
  onChange,
  setBooks,
  loading,
}: {
  value: string;
  onChange: (value: string) => void;
  setBooks: (books: []) => void;
  loading: boolean;
}) {
  const dispatch = useDispatch();
  const searchBookState = useSelector((state: any) => state.searchAllBooks);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const handleSearch = () => {
    dispatch(
      searchBooks({
        query: value,
        page,
      }) as any
    );
  };

  useEffect(() => {
    if (searchBookState.isSuccessful) {
      setBooks(searchBookState.data.docs);
      setCount(Math.ceil(searchBookState.data.numFound / 100));
      dispatch(searchBooksCleanup());
    }
  }, [searchBookState]);

  const handleChange = (event: React.ChangeEvent<unknown>, pageNum: number) => {
    setPage(pageNum);
    dispatch(
      searchBooks({
        query: value,
        page: pageNum,
      }) as any
    );
  };

  return (
    <section className="sticky top-0 z-50 bg-white shadow-md mb-10">
      <div className="container mx-auto px-6 py-3 ">
        <Stack spacing={2} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            id="outlined-search"
            label={`Enter Search`}
            type="search"
            variant="outlined"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <Button disabled={loading} variant="contained" onClick={handleSearch}>
            Search
          </Button>
          <PaginationTor
            page={page}
            loading={loading}
            count={count}
            handleChange={handleChange}
          />
        </Stack>
      </div>
    </section>
  );
}

export default SearchInput;
