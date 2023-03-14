import * as types from '../action-types';
import AxiosCall from '../../utils/axios';
import ErrorHandler from '../../utils/error-handler';

export const getSingleBookStart = () => ({
  type: types.GET_SINGLE_BOOKS_START,
});

export const getSingleBookSuccess = (payload: any) => ({
  type: types.GET_SINGLE_BOOKS_SUCCESS,
  payload,
});

export const getSingleBookFail = (payload: any) => ({
  type: types.GET_SINGLE_BOOKS_FAIL,
  payload,
});

export const getSingleBookCleanup = () => ({
  type: types.GET_SINGLE_BOOKS_CLEANUP,
});

export const getSingleBook =
  (payload: { bookId: string }) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      dispatch(getSingleBookStart());
      const requestObj = {
        path: `/books/${payload.bookId}.json`,
        method: 'GET',
      };
      const data = await AxiosCall(requestObj);
      console.log({ datattt: data });
      dispatch(getSingleBookSuccess(data));
    } catch (err) {
      const error = ErrorHandler(err);
      console.log({ error: error });
      dispatch(getSingleBookFail(error));
    }
  };
