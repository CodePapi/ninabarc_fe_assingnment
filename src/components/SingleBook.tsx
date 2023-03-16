import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button, Container, CssBaseline } from '@mui/material';
import ErrorOccurred from './Utilities/ErrorOccured';
import PageLoader from './Utilities/PageLoader';
import { useFavorites, useGetSingleBook } from '../hooks';

function SingleBookDetails() {
  const { getBook, book, loading, error } = useGetSingleBook();
  const { addBookToFavs } = useFavorites();
  const { bookId } = useParams<{ bookId: string }>();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (bookId) {
      getBook(bookId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (bookId) {
      getBook(bookId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-3">
        <PageLoader />
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div className="container mx-auto px-6 py-3">
        <ErrorOccurred />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-6 py-3">
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-96 md:w-1/3">
            <img
              src={state?.coverImage}
              alt="book cover"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-2xl font-semibold">{book?.title}</h1>

            <p className="text-sm text-gray-500"> {book?.by_statement}</p>
            <p className="text-xs text-gray-500"> {book?.subtitle} </p>

            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <h5 className="text-sm font-semibold">Description</h5>
              </div>
              <div className="mx-2 text-xs text-gray-500">
                {book?.description?.value}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <h5 className="text-sm font-semibold">Publication Date</h5>
              </div>
              <div className="mx-2 text-xs text-gray-500">
                {book?.publish_date}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <h5 className="text-sm font-semibold">Publisher</h5>
              </div>
              <div className="mx-2 text-xs text-gray-500">
                {book?.publishers}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Button
                onClick={() =>
                  addBookToFavs({
                    title: book?.title,
                    author_name: book?.by_statement,
                    coverImage: state?.coverImage,
                    key: book?.key,
                    id: book?.id,
                    cover_i: undefined,
                    seed: [],
                  })
                }
              >
                Add to Favourites
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleBookDetails;
