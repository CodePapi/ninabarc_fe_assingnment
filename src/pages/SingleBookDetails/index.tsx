import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PageLoader from '../../components/PageLoader';
import ErrorOccurred from '../../components/ErrorOccured';
import useGetSingleBook from '../../hooks/useGetSingBook';

function SingleBookDetails() {
  const { getBook, book, loading, error } = useGetSingleBook();
  const { bookId } = useParams<{ bookId: string }>();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (bookId) {
      getBook(bookId);
    }
  }, []);

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
            <div className="mx-2 text-xs text-gray-500">{book?.publishers}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookDetails;
