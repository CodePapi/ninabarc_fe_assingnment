import * as types from '../action-types';
import { booksToFav as initialState } from '../initialStates';
import { SearchedBooksType, REDUX_ACTION_TYPE } from '../../Types.d';

const favBooks = (
  state = initialState,
  action: { type: REDUX_ACTION_TYPE; payload: any }
) => {
  switch (action.type) {
    case types.ADD_BOOK_TO_FAV:
      const isDuplicate = state.data.some(
        (book: SearchedBooksType) => book.id === action.payload.id
      );
      if (isDuplicate) {
        return state;
      }
      return { data: [action.payload, ...state.data] };

    case types.REMOVE_BOOK_FROM_FAV:
      return {
        data: state.data.filter(
          (book: SearchedBooksType) => book.id !== action.payload
        ),
      };
    case types.CLEAR_FAV_BOOKS:
      return { data: [] };

    default:
      return state;
  }
};

export default favBooks;
