import PaginationTor from './Pagination';
import { render } from '@testing-library/react';

describe('Pagination', () => {
  it('render  Pagination', () => {
    const { container } = render(
      <PaginationTor
        page={1}
        loading={false}
        count={10}
        handlePageChange={jest.fn()}
      />
    );
    expect(container).toBeDefined();
  });
});
