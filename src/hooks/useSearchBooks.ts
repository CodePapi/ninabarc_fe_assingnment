import { useSelector, useDispatch } from 'react-redux';
import { searchBooks, searchBooksCleanup } from '../store/actions/searchBooks';
import { useEffect } from 'react';
import { DataStateType } from '../Types';


const useSearchBooks = () => {
  const dispatch = useDispatch();

  const { data, isSuccessful, error, isLoading } = useSelector(
    (state: { searchAllBooks: DataStateType }) => state.searchAllBooks
  );

  const searchAllBooks = (query: string, page: number) => {
    dispatch(searchBooks({ query, page }) as any);
  };

  useEffect(() => {
    return () => {
      dispatch(searchBooksCleanup());
    };
  }, [data]);
  return {
    books: data ?? {
      docs: [],
    },
    success: isSuccessful??false,
    error,
    loading: isLoading??false,
    searchAllBooks,
  };
};

export default useSearchBooks;
