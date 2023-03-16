import NoBookFound from './NoBookFound';
import { render, screen } from '@testing-library/react';

describe('NoBookFound', () => {
  it('renders NoBookFound', () => {
    render(<NoBookFound />);
    expect(
      screen.getByText(/No book found, enter a valid book name and try again/i)
    ).toBeInTheDocument();
  });
});
