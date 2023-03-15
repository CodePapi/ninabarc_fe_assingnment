import { combineReducers } from 'redux';
import searchAllBooks from './searchAllBooks';
import getSingleBook from './getSingleBook';
import addBookToFav from './favBooks';
import lastSearchedBook from './lastSearchedBook';

const rootReducer = combineReducers({
  searchAllBooks,
  getSingleBook,
  addBookToFav,
  lastSearchedBook,
});

export default rootReducer;
