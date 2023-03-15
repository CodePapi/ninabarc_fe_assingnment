import useSearchBooks from './useSearchBooks';
import { searchBooks } from '../store/actions/searchBooks';
import { renderHook } from '@testing-library/react';

const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector,
  useDispatch: () => mockDispatch,
}));

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));
jest.mock('../store/actions/searchBooks', () => ({
  searchBooks: jest.fn(() => Promise.resolve({ data: {} })),
  searchBooksCleanup: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('useSearchBooks', () => {
  it('should return books', () => {
    const { result: MockResult } = renderHook(() => useSearchBooks());
    expect(MockResult.current.books).toEqual({
      docs: [],
    });
  });

  it('should return loading', () => {
    const { result: MockResult } = renderHook(() => useSearchBooks());
    expect(MockResult.current.loading).toEqual(false);
  });

  it('should return success', () => {
    const { result: MockResult } = renderHook(() => useSearchBooks());
    expect(MockResult.current.success).toEqual(false);
  });

  it('should return error', () => {
    const { result: MockResult } = renderHook(() => useSearchBooks());
    expect(MockResult.current.error).toEqual(undefined);
  });

  it('should search books', () => {
    const { result: MockResult } = renderHook(() => useSearchBooks());
    MockResult.current.searchAllBooks('query', 1);
    expect(searchBooks as any).toBeCalledWith({ query: 'query', page: 1 });
  });
});
