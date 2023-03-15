import * as types from '../action-types';


export const addBookToFav = (book: any) => {
  return {
    type: types.ADD_BOOK_TO_FAV,
    payload: book,
  };
}

export const removeBookFromFav = (id: string) => {
  return {
    type: types.REMOVE_BOOK_FROM_FAV,
    payload: id,
  };
}