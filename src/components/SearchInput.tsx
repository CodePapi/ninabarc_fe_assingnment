import { Stack, TextField, Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBooks, searchBooksCleanup } from '../store/actions/searchBooks';

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
  const handleSearch = () => {
    dispatch(
      searchBooks({
        query: value,
      }) as any
    );
  };

  useEffect(() => {
    if (searchBookState.isSuccessful) {
      setBooks(searchBookState.data.docs);
      dispatch(searchBooksCleanup());
    }
  }, [searchBookState]);
  return (
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
    </Stack>
  );
}

export default SearchInput;
