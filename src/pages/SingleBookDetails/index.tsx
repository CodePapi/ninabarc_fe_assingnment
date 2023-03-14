import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
  getSingleBookCleanup,
  getSingleBook,
} from '../../store/actions/getSingleBook';
import PageLoader from '../../components/PageLoader';
import ErrorOccurred from '../../components/ErrorOccured';

function SingleBookDetails() {
  const { bookId } = useParams<{ bookId: string }>();
  const location = useLocation();
  const state = location.state;

  const dispatch = useDispatch();
  const bookDetailsState = useSelector((state: any) => state.getSingleBook);
  const [book, setBook] = useState<any>({
    key: '',
    title: '',
    author_name: [],
    coverImage: '',
    id: '',
  });
  useEffect(() => {
    if (bookId) {
      dispatch(getSingleBook({ bookId }) as any);
    }
  }, []);

  useEffect(() => {
    if (bookDetailsState.isSuccessful) {
      setBook(bookDetailsState.data);
      dispatch(getSingleBookCleanup());
    }
  }, [bookDetailsState]);
  if (bookDetailsState.isLoading) {
    return (
      <div className="container mx-auto px-6 py-3">
        <PageLoader />
      </div>
    );
  }

  if (!bookDetailsState.isLoading && bookDetailsState.error) {
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
          <h1 className="text-2xl font-semibold">{book.title}</h1>

          <p className="text-sm text-gray-500"> {book.by_statement}</p>
          <p className="text-xs text-gray-500"> {book.subtitle} </p>

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
              {book.publish_date}
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <h5 className="text-sm font-semibold">Publisher</h5>
            </div>
            <div className="mx-2 text-xs text-gray-500">{book.publishers}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookDetails;
