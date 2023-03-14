import { useState } from 'react';
import SearchedBooks from '../../components/SearchedBooks';
import SearchInput from '../../components/SearchInput';
import { Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';
import { useSelector } from 'react-redux';

function SearchBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const searchBookState = useSelector(
    (state: {
      searchAllBooks: {
        isLoading: boolean;
        isSuccessful: boolean;
        error: any;
        data: { docs: any };
      };
    }) => state.searchAllBooks
  );

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default SearchBooks;
