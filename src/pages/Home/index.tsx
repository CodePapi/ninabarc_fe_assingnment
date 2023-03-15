import { Container, CssBaseline } from '@mui/material';

// Components
import SearchedBooks from './SearchedBooks';
import SearchInput from './SearchInput';

function SearchBooks() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <SearchInput />
        <SearchedBooks />
      </Container>
    </div>
  );
}

export default SearchBooks;
