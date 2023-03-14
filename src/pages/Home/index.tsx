import { useState } from 'react';
import SearchedBooks from '../../components/SearchedBooks';
import SearchInput from '../../components/SearchInput';
import { Container, CssBaseline, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { DataStateType } from '../../Types';

function SearchBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const searchBookState = useSelector(
    (state: { searchAllBooks: DataStateType }) => state.searchAllBooks
  );

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Books
        </Typography>
        <SearchInput
          value={search}
          onChange={setSearch}
          setBooks={setBooks}
          loading={searchBookState.isLoading}
        />
        <SearchedBooks
          books={books}
          loading={searchBookState.isLoading}
          error={searchBookState.error}
        />
      </Container>
    </div>
  );
}

export default SearchBooks;
