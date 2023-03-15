import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useHistory: jest.fn(),
  useNavigate: jest.fn(),
}));

test('renders NavBar containing Home and Favs ', () => {
  render(<NavBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Favs/i)).toBeInTheDocument();
});
