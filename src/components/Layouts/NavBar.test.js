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
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
}));
test('renders NavBar containing Home and Favs ', () => {
  render(<NavBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Favs /i)).toBeInTheDocument();
  expect(screen.getByText(/Clear Favs/i)).toBeInTheDocument();
});
