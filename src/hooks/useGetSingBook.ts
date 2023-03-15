import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getSingleBook,
  getSingleBookCleanup,
} from '../store/actions/getSingleBook';
import { DataStateType } from '../Types';

const useGetSingleBook = () => {
  const dispatch = useDispatch();
  const { data, isSuccessful, error, isLoading } = useSelector(
    (state: { getSingleBook: DataStateType }) => state.getSingleBook
  );

  const getBook = (bookId: string) => {
    dispatch(getSingleBook({ bookId }) as any);
  };

  useEffect(() => {
    dispatch(getSingleBookCleanup());
  }, [data]);

  return {
    book: data,
    success: isSuccessful,
    error,
    loading: isLoading,
    getBook,
  };
};

export default useGetSingleBook;
