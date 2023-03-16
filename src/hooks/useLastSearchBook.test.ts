import { renderHook } from '@testing-library/react';
import { useLastSearchBook } from './';

const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector,
  useDispatch: () => mockDispatch,
}));
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('useLastSearchBook', () => {
  it('should be defined', () => {
    expect(useLastSearchBook).toBeDefined();
  });
  it('should return lastSearched', () => {
    const { result: MockResult } = renderHook(() => useLastSearchBook());
    expect(MockResult.current.lastSearched).toEqual('');
  });
  it('should add book to lastSearched', () => {
    const { result: MockResult } = renderHook(() => useLastSearchBook());
    MockResult.current.addBookToLastSearcheds('book');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'LAST_SEARCHED_BOOKS',
      payload: 'book',
    });
  });
});
