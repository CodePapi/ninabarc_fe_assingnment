import * as types from '../action-types';
import { booksToFav as initialState } from '../initialStates';

const addBookToFav = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.ADD_BOOK_TO_FAV:
      return { data: [...state.data, action.payload] };
    case types.REMOVE_BOOK_FROM_FAV:
      return {
        data: state.data.filter((book: any) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default addBookToFav;
