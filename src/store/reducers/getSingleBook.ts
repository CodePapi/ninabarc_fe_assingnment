import * as types from '../action-types';
import { getSingleBook as initialState } from '../initialStates';

const getSingleBook = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.GET_SINGLE_BOOKS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SINGLE_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.GET_SINGLE_BOOKS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.GET_SINGLE_BOOKS_CLEANUP:
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

export default getSingleBook;
