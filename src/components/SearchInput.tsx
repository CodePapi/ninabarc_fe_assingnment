// Modules
import { Stack, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';

// Hooks
import useSearchBooks from '../hooks/useSearchBooks';
import { useLastSearchBook } from '../hooks/useLastSearchBook';

// Components
import PaginationTor from './Pagination';

function SearchInput({}: {}) {
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
    setPage(pageNum);
    searchAllBooks(search, pageNum);
  };

  // hooks
  useEffect(() => {
    if (lastSearched.length > 0) {
      setSearch(lastSearched);
    }
    searchAllBooks(search, page);
  }, []);
  useEffect(() => {
    if (success) {
      setCount(Math.ceil(books.numFound / 100));
    }
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
