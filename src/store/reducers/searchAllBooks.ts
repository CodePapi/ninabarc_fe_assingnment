import * as types from '../action-types';
import { searchBooks as initialState } from '../initialStates';
import { REDUX_ACTION_TYPE } from '../../Types.d';

const SearchBooks = (
  state = initialState,
  action: { type: REDUX_ACTION_TYPE; payload: any }
) => {
  switch (action.type) {
    case types.SEARCH_BOOKS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.SEARCH_BOOKS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.SEARCH_BOOKS_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
      };
    default:
      return state;
  }
};

export default SearchBooks;
