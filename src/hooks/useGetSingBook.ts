import { useSelector, useDispatch } from 'react-redux';
import { getSingleBook } from '../store/actions/getSingleBook';
import { DataStateType } from '../Types';

const useGetSingleBook = () => {
  const dispatch = useDispatch();
  const { data, isSuccessful, error, isLoading } = useSelector(
    (state: { getSingleBook: DataStateType }) => state.getSingleBook
  );

  const getBook = (bookId: string) => {
    dispatch(getSingleBook({ bookId }) as any);
  };

  return {
    book: data,
    success: isSuccessful ?? false,
    error,
    loading: isLoading ?? false,
    getBook,
  };
};

export default useGetSingleBook;
