import * as types from '../action-types';
import { booksToFav as initialState } from '../initialStates';
import { SearchedBooksType, REDUX_ACTION_TYPE } from '../../Types';

const favBooks = (
  state = initialState,
  action: { type: REDUX_ACTION_TYPE; payload: string }
) => {
  switch (action.type) {
    case types.ADD_BOOK_TO_FAV:
      return { data: [...state.data, action.payload] };
    case types.REMOVE_BOOK_FROM_FAV:
      return {
        data: state.data.filter(
          (book: SearchedBooksType) => book.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favBooks;
