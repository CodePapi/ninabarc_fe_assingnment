import * as types from '../action-types';
import AxiosCall from '../../utils/axios';
import ErrorHandler from '../../utils/error-handler';

export const searchBooksStart = () => ({
  type: types.SEARCH_BOOKS_START
});

export const searchBooksSuccess = (payload: any) => ({
  type: types.SEARCH_BOOKS_SUCCESS,
  payload
});

export const searchBooksFail = (payload: any) => ({
  type: types.SEARCH_BOOKS_FAIL,
  payload
});

export const searchBooksCleanup = () => ({
  type: types.SEARCH_BOOKS_CLEANUP
});

export const searchBooks = (payload: {
    query: string;
    page: number;
}) => async (dispatch: (arg0: { type: string; payload?: any; }) => void)=> {

  try {
    dispatch(searchBooksStart());
    const requestObj = {
      path: `?q=${payload.query}&page=${payload.page}`,
      method: "GET",
    }
    const  data  = await AxiosCall(requestObj);
    console.log({"datattt":data});
 dispatch(searchBooksSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    console.log({"error":error});
    dispatch(searchBooksFail(error));
  }
}