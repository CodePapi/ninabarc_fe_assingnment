// hooks to add book to favourite
import { useDispatch, useSelector } from 'react-redux';

import { addBookToFav, removeBookFromFav } from '../store/actions/favBooks';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favoritesState = useSelector((state: any) => state.addBookToFav);
  const addBookToFavs = (book: any) => {
    dispatch(addBookToFav(book));
  };
  const removeFromFavs = (id: string) => {
    dispatch(removeBookFromFav(id));
  };
  const favorites = favoritesState.data;
  return { addBookToFavs, removeFromFavs, favorites };
};
// Compare this snippet from src/store/reducers/favBooks.ts:
// import * as types from '../action-types';
// import { addBookToFav as initialState } from '../initialStates';
//
