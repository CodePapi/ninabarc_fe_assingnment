export type DataStateType = {
  isLoading: boolean;
  isSuccessful: boolean;
  data: any;
  error: any;
};
export type SingleBookDetailsType = {
  title: string;
  author_name: string[];
  coverImage: string;
  key: string;
  cover_i: any;
  seed?: string[];
  id?: string;
};

export type SearchedBooksType = {
  title: string;
  author_name: string[];
  coverImage: string;
  key: string;
  cover_i: any;
  seed: string[];
  id?: string;
};

export type AxiosRequestConfigType = {
  path: string;
  method: string;
  data?: any;
  contentType?: string;
};

export type SearchBooksPayloadtype = {
  query: string;
  page: number;
};

export type REDUX_ACTION_TYPE =
  | 'SEARCH_BOOKS_START'
  | 'SEARCH_BOOKS_SUCCESS'
  | 'SEARCH_BOOKS_FAIL'
  | 'SEARCH_BOOKS_CLEANUP'
  | 'GET_SINGLE_BOOKS_START'
  | 'GET_SINGLE_BOOKS_SUCCESS'
  | 'GET_SINGLE_BOOKS_FAIL'
  | 'GET_SINGLE_BOOKS_CLEANUP'
  | 'ADD_BOOK_TO_FAV'
  | 'REMOVE_BOOK_FROM_FAV';
