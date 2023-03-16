import * as types from '../action-types';
import { getSingleBook as initialState } from '../initialStates';
import { REDUX_ACTION_TYPE, SingleBookDetailsType } from '../../Types.d';

const getSingleBook = (
  state = initialState,
  action: { type: REDUX_ACTION_TYPE; payload: SingleBookDetailsType }
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
