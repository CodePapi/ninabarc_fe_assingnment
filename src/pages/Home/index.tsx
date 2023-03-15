import { Container, CssBaseline } from '@mui/material';
import SearchedBooks from '../../components/SearchedBooks';
import SearchInput from '../../components/SearchInput';

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
