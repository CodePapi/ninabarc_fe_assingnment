import SearchedBooks from './SearchedBooks';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

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
      docs: [
        {
          title: 'Favorite Title1',
          author_name: ['Some Author'],
          coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
          id: '123457',
          key: '1234567',
          seed: ['book/1234567'],
        },
      ],
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
