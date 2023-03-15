import Axios from 'axios';
import { AxiosRequestConfigType } from '../../Types';
const baseURL: string = 'https://openlibrary.org';

const AxiosCall = async (requestObj: AxiosRequestConfigType) => {
  const { path, method, data, contentType } = requestObj;

  let headers = {
    'Content-Type': contentType || 'application/json',
  };

  const url = `${baseURL}${path}`;
  try {
    const { data: response } = await Axios({
      url,
      method,
      data,
      headers,
    });

    const result = response;
    return result;
  } catch (error) {
    throw error;
  }
};

export default AxiosCall;
