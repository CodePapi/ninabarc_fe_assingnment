import { renderHook } from '@testing-library/react';
import { useFavorites } from './';
import { MOCKED_BOOKS } from '../constants';

const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector,
  useDispatch: () => mockDispatch,
}));
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('useFavorites', () => {
  it('should return favorites', () => {
    const { result: MockResult } = renderHook(() => useFavorites());
    expect(MockResult.current.favorites).toEqual([]);
  });

  it('should add book to favorites', () => {
    const { result: MockResult } = renderHook(() => useFavorites());
    MockResult.current.addBookToFavs({
      id: MOCKED_BOOKS.id,
      author_name: MOCKED_BOOKS.author_name,
      title: MOCKED_BOOKS.title,
      coverImage: MOCKED_BOOKS.coverImage,
      cover_i: MOCKED_BOOKS.coverImage,
      seed: MOCKED_BOOKS.seed,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_BOOK_TO_FAV',
      payload: {
        id: MOCKED_BOOKS.id,
        author_name: MOCKED_BOOKS.author_name,
        title: MOCKED_BOOKS.title,
        coverImage: MOCKED_BOOKS.coverImage,
        cover_i: MOCKED_BOOKS.coverImage,
        seed: MOCKED_BOOKS.seed,
      },
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
