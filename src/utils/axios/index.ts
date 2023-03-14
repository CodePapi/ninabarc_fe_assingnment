import Axios from 'axios';
let baseURL: string = 'https://openlibrary.org/search.json';

const AxiosCall = async (requestObj: {
  path: string;
  method: string;
  data?: any;
  contentType?: string;
}) => {
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
