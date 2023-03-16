import SearchInput from './SearchInput';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { MOCKED_BOOKS } from '../constants';

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
          docs: [MOCKED_BOOKS],
        },
        loading: false,
        error: false,
        searchAllBooks: jest.fn(),
      };
    },
  };
});

describe('SearchInput', () => {
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
