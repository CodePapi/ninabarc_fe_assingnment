import SingleBookDetails from './SingleBook';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
}));
const MockLocation = {
  pathname: '/book/1234567',
  search: '',
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
        favorites: [
          {
            title: 'Favorite Title1',
            author_name: ['Some Author'],
            coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
          },
        ],
      };
    },
    useGetSingleBook: () => {
      return {
        book: {
          title: 'Some Title',
          by_statement: 'by Samuel Egbajie',
          description: {
            value: 'This is a book about something',
          },
          publish_date: '2021',
          author_name: ['Some Author'],
          coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
          id: '1234567',
        },
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
    // expect(screen.getByText(/View/i)).toBeInTheDocument();
  });
  it('author name', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByText(/by Samuel Egbajie/i)).toBeInTheDocument();
  });
  it('title', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByText(/Some Title/i)).toBeInTheDocument();
  });

  it('description', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(
      screen.getByText(/This is a book about something/i)
    ).toBeInTheDocument();
  });

  it('publish date', () => {
    render(
      <Router>
        <SingleBookDetails />
      </Router>
    );
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
  });
});
