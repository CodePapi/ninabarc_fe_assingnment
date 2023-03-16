import { renderHook } from '@testing-library/react';
import { useFavorites } from './';

const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector,
  useDispatch: () => mockDispatch,
}));
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));
const book = {
  id: '1',
  author_name: ['author'],
  title: 'title',
  coverImage: 'coverImage',
  key: 'key',
  cover_i: 'cover_i',
  seed: ['seed'],
};

describe('useFavorites', () => {
  it('should return favorites', () => {
    const { result: MockResult } = renderHook(() => useFavorites());
    expect(MockResult.current.favorites).toEqual([]);
  });

  it('should add book to favorites', () => {
    const { result: MockResult } = renderHook(() => useFavorites());
    MockResult.current.addBookToFavs(book);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_BOOK_TO_FAV',
      payload: { ...book },
    });
  });

  it('should remove book from favorites', () => {
    const { result: MockResult } = renderHook(() => useFavorites());
    MockResult.current.removeFromFavs('1');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_BOOK_FROM_FAV',
      payload: '1',
    });
  });
});
