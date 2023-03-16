import Favorites from './Favourites';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('axios', () => ({
    get: jest.fn(),
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
            id: '123457',
            key: '1234567',
          },
          {
            title: 'Some Title2',
            author_name: ['Some Author'],
            coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
            id: '1234567',
            key: '1234567',
          },
        ],
      };
    },
  };
});
describe('Favorites', () => {
  it('renders Favorites', () => {
    render(
      <Router>
        <Favorites />
      </Router>
    );
    expect(screen.getByText(/Favorite Title1/i)).toBeInTheDocument();
  });
});
