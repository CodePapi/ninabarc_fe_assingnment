import { useDispatch, useSelector } from 'react-redux';
import { addBookToFav, removeBookFromFav } from '../store/actions/favBooks';
import { SearchedBooksType } from '../Types';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favoritesState = useSelector(
    (state: { addBookToFav: any }) => state.addBookToFav
  );
  const addBookToFavs = (book: SearchedBooksType) => {
    dispatch(addBookToFav(book));
  };
  const removeFromFavs = (id: string) => {
    dispatch(removeBookFromFav(id));
  };
  const favorites = favoritesState?.data??[];
  return { addBookToFavs, removeFromFavs, favorites };
};
