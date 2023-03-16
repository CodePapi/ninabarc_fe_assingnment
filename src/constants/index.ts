export const baseURL: string = 'https://openlibrary.org';

export const MOCKED_BOOKS = {
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
};

export const INITIAL_STATES = {
  isLoading: false,
  isSuccessful: false,
  data: null,
  error: null,
};
