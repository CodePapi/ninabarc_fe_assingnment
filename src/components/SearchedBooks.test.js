import SearchedBooks from './SearchedBooks';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MOCKED_BOOKS } from '../constants';
import '@testing-library/jest-dom'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('axios', () => ({
  get: jest.fn(),
}));
let MockedSearchedBooks = () => {
  return {
    books: {
      docs: [MOCKED_BOOKS],
    },
    loading: false,
    error: false,
  };
};

jest.mock('../hooks', () => {
  return {
    useSearchBooks: () => MockedSearchedBooks(),
    useFavorites: () => jest.fn(),
  };
});

describe('SearchedBooks', () => {
  it('renders SearchedBooks when at lease a book is gotten', () => {
    render(
      <Router>
        <SearchedBooks />
      </Router>
    );
    expect(screen.getByText(/Favorite Title1/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/View/i));
    expect(window.location.pathname).toBe('/book/1234567');
  });
  it('return "no book found screen" when no book is gotten', () => {
    MockedSearchedBooks = () => {
      return {
        books: {
          docs: [],
        },
        loading: false,
        error: false,
      };
    };
    render(
      <Router>
        <SearchedBooks />
      </Router>
    );
    expect(
      screen.getByText(/No book found, enter a valid book name and try again/i)
    ).toBeInTheDocument();
  });

  it('return "loading screen" when loading is true', () => {
    MockedSearchedBooks = () => {
      return {
        books: {
          docs: [],
        },
        loading: true,
        error: false,
      };
    };
    render(
      <Router>
        <SearchedBooks />
      </Router>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('return "error screen" when error is true', () => {
    MockedSearchedBooks = () => {
      return {
        books: {
          docs: [],
        },
        loading: false,
        error: true,
      };
    };
    render(
      <Router>
        <SearchedBooks />
      </Router>
    );
    expect(
      screen.getByText(
        /An error while searching for books, please try again later/i
      )
    ).toBeInTheDocument();
  });
});
