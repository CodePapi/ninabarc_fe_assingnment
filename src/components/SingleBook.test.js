import SingleBookDetails from './SingleBook';
import { render, screen } from '@testing-library/react';
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
const MockLocation = {
  pathname: '/book/1234567',
  state: {
    coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
  },
};
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => MockLocation,
}));
jest.mock('../hooks', () => {
  return {
    useFavorites: () => {
      return {
        favorites: [MOCKED_BOOKS],
      };
    },
    useGetSingleBook: () => {
      return {
        book: MOCKED_BOOKS,
        loading: false,
        error: false,
      };
    },
  };
});

describe('SingleBookDetails', () => {
  it('renders SingleBookDetails', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://covers.openlibrary.org/b/id/1234567-M.jpg'
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'book cover');
  });
  it('get author name', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByText(/by Samuel Egbajie/i)).toBeInTheDocument();
  });
  it('get book title', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByText(/Favorite Title1/i)).toBeInTheDocument();
  });

  it('get description', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(
      screen.getByText(/This is a book about something/i)
    ).toBeInTheDocument();
  });

  it('get publish date', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
  });
});
