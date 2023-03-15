import { useSelector, useDispatch } from 'react-redux';
import { searchBooks, searchBooksCleanup } from '../store/actions/searchBooks';
import { useEffect } from 'react';
const useSearchBooks = () => {
  const dispatch = useDispatch();

  const { data, isSuccessful, error, isLoading } = useSelector(
    (state: any) => state.searchAllBooks
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
    books: data??{
        docs: [],
    },
    success: isSuccessful,
    error,
    loading: isLoading,
    searchAllBooks,
  };
};

export default useSearchBooks;
