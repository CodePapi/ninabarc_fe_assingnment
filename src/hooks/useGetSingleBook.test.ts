import { renderHook } from '@testing-library/react';
import useGetSingleBook from './useGetSingBook';

const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector,
  useDispatch: () => mockDispatch,
}));

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));
jest.mock('../store/actions/getSingleBook', () => ({
  getSingleBook: jest.fn(() => Promise.resolve({ data: {} })),
  getSingleBookCleanup: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('useGetSingleBook', () => {
  it('should return book', () => {
    const { result: MockResult } = renderHook(() => useGetSingleBook());
    expect(MockResult.current.book).toEqual(undefined);
  });

  it('should return loading', () => {
    const { result: MockResult } = renderHook(() => useGetSingleBook());
    expect(MockResult.current.loading).toEqual(false);
  });

  it('should return success', () => {
    const { result: MockResult } = renderHook(() => useGetSingleBook());
    expect(MockResult.current.success).toEqual(false);
  });

  it('should return error', () => {
    const { result: MockResult } = renderHook(() => useGetSingleBook());
    expect(MockResult.current.error).toEqual(undefined);
  });
});
