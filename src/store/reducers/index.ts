import { combineReducers } from 'redux';
import searchAllBooks from './searchAllBooks';
import getSingleBook from './getSingleBook';

const rootReducer = combineReducers({
  searchAllBooks,
  getSingleBook
});

export default rootReducer;