import { useEffect, useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import { useLastSearchBook, useSearchBooks } from '../hooks';
import PaginationTor from './Pagination';

function SearchInput() {
  const { searchAllBooks, loading, books, success } = useSearchBooks();
  const { lastSearched, addBookToLastSearcheds } = useLastSearchBook();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('Sample book');

  // functions
  const handleSearch = () => {
    searchAllBooks(search, page);
    addBookToLastSearcheds(search);
  };
  const handleChange = (event: React.ChangeEvent<unknown>, pageNum: number) => {
    event.preventDefault();
    setPage(pageNum);
    searchAllBooks(search, pageNum);
  };

  // hooks
  useEffect(() => {
    if (lastSearched?.length > 0) {
      setSearch(lastSearched);
    }
    searchAllBooks(search, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (success) {
      setCount(Math.ceil(books.numFound / 100));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return (
    <section className="sticky top-10 z-40 bg-white shadow-md mb-10">
      <div className="container mx-auto px-6 py-3 ">
        <Stack spacing={2} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            id="outlined-search"
            label={`Enter Search`}
            type="search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
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
