import Favorites from './Favourites';
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
jest.mock('../hooks', () => {
  return {
    useFavorites: () => {
      return {
        favorites: [MOCKED_BOOKS],
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
