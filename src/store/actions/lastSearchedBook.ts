import * as types from '../action-types';

export const addBookToLastSearched = (book: any) => {
  return {
    type: types.LAST_SEARCHED_BOOKS,
    payload: book,
  };
};
