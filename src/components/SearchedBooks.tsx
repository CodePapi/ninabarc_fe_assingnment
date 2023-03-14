import { Grid } from '@mui/material';
import BooksCard from './BooksCard';
import PageLoader from './PageLoader';
import ErrorOccurred from './ErrorOccured';
import NoBookFound from './NoBookFound';

type Books = {
  title: string;
  author_name: string[];
  coverImage: string;
  key: string;
  cover_i: any;
  seed:string[];
};

function SearchedBooks({
  books,
  loading,
  error,
}: {
  books: Books[];
  loading: boolean;
  error: any;
}) {
  if (loading) {
    return <PageLoader />;
  }

  if (!loading&&error) {
    return <ErrorOccurred />;
  }

  if (!loading&&!error&&books.length === 0) {
    return <NoBookFound />;
  }
  return (
    <>
      <Grid container spacing={4}>
        {books.map((book: Books) => (
          <Grid item key={book.key} xs={12} sm={6} md={3}>
            <BooksCard
              title={book.title}
              author_name={book.author_name}
              id={book.seed[0]}
              coverImage={
                book['cover_i']
                  ? `https://covers.openlibrary.org/b/id/${book['cover_i']}-M.jpg`
                  : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SearchedBooks;
