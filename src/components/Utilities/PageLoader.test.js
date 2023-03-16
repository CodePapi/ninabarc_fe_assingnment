import PageLoader from './PageLoader';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PageLoader', () => {
  it('renders PageLoader', () => {
    render(
      <Router>
        <PageLoader />
      </Router>
    );
    expect(screen.getByText(/Loading Books.../i)).toBeInTheDocument();
  });
});
