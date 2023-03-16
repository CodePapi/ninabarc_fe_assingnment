import BooksCard from './BooksCard';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('../../utils/helpers', () => ({
  truncate: jest.fn(),
}));
jest.mock('axios', () => ({
    get: jest.fn(),
    }));
describe('BooksCard', () => {
  it('renders BooksCard Correctly', () => {
    render(
      <Router>
        <BooksCard
          title="Some Title"
          author_name={['Some Author']}
          coverImage="https://covers.openlibrary.org/b/id/1234567-M.jpg"
          id="1234567"
          deleteFav={true}
          key="1234567"
        />
      </Router>
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://covers.openlibrary.org/b/id/1234567-M.jpg'
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Some Title');

    expect(screen.getByText(/View/i)).toBeInTheDocument();
  });
});
