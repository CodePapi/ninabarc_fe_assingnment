import ErrorOccurred from './ErrorOccured';
import NoBookFound from './NoBookFound';
import PageLoader from './PageLoader';
import { render, screen } from '@testing-library/react';

test('renders ErrorOccurred', () => {
  render(<ErrorOccurred />);
  expect(
    screen.getByText(
      /An error while searching for books, please try again later/i
    )
  ).toBeInTheDocument();
});

test('renders NoBookFound', () => {
  render(<NoBookFound />);
  expect(
    screen.getByText(/No book found, enter a valid book name and try again/i)
  ).toBeInTheDocument();
});

test('renders PageLoader', () => {
  render(<PageLoader />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
