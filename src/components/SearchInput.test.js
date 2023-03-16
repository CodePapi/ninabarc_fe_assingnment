import SearchInput from './SearchInput';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { docs: [] } })),
}));
let MockedReduxState = () => {
  return {
    data: [],
    isLoading: false,
    error: false,
    isSuccessful: false,
  };
};
jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => MockedReduxState()),
  useDispatch: jest.fn(),
}));

jest.mock('../hooks', () => {
  return {
    useLastSearchBook: () => {
      return {
        lastSearchBook: 'Harry Potter',
        addBookToLastSearcheds: jest.fn(),
      };
    },
    useSearchBooks: () => {
      return {
        books: {
          docs: [
            {
              title: 'Favorite Title1',
              author_name: ['Some Author'],
              coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
            },
          ],
        },
        loading: false,
        error: false,
        searchAllBooks: jest.fn(),
      };
    },
  };
});

describe('SearchInput', () => {
  it('renders SearchInput', () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );
    expect(screen.getByDisplayValue(/Sample book/i)).toBeInTheDocument();
  });
  it('renders SearchInput with value', () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );
    const input = screen.getByDisplayValue(/Sample book/i);
    userEvent.type(input, ' Harry Potter');
    expect(input.value).toBe('Sample book Harry Potter');
  });
  it('renders SearchInput with value and click search', () => {
    const { container } = render(
      <Router>
        <SearchInput />
      </Router>
    );
    const button = container.querySelector('button');

    const input = screen.getByDisplayValue(/Sample book/i);
    userEvent.type(input, ' Harry Potter');
    fireEvent.click(button);
    expect(input.value).toBe('Sample book Harry Potter');
  });
});
