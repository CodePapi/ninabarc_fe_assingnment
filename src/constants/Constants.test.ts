import { baseURL, MOCKED_BOOKS, INITIAL_STATES } from './';

describe('Constants', () => {
  it('should return base URL', () => {
    expect(baseURL).toEqual('https://openlibrary.org');
  });

  it('should return mocked books', () => {
    expect(MOCKED_BOOKS).toEqual({
      title: 'Favorite Title1',
      author_name: ['Some Author'],
      coverImage: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
      id: '123457',
      key: '1234567',
      seed: ['book/1234567'],
      by_statement: 'by Samuel Egbajie',
      description: {
        value: 'This is a book about something',
      },
      publish_date: '2021',
    });
  });

  it('should return initial states', () => {
    expect(INITIAL_STATES).toEqual({
      isLoading: false,
      isSuccessful: false,
      data: null,
      error: null,
    });
  });
});
