import { REDUX_ACTION_TYPE } from '../../Types.d';
import * as types from '../action-types';
import { lastSearchedBooks as initialState } from '../initialStates';

const lastSearchedBook = (
  state = initialState,
  action: { type: REDUX_ACTION_TYPE; payload: any }
) => {
  switch (action.type) {
    case types.LAST_SEARCHED_BOOKS:
      return { data: action.payload };

    default:
      return state;
  }
};

export default lastSearchedBook;
