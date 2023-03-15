import { combineReducers } from 'redux';
import searchAllBooks from './searchAllBooks';
import getSingleBook from './getSingleBook';
import addBookToFav from './favBooks';

const rootReducer = combineReducers({
  searchAllBooks,
  getSingleBook,
  addBookToFav,
});

export default rootReducer;