import ErrorHandler from './';

describe('ErrorHandler', () => {
  it('should return error message "error" when error is a deep nested object', () => {
    const error = {
      response: {
        data: {
          errors: [
            {
              msg: 'error',
            },
          ],
        },
      },
    };
    expect(ErrorHandler(error)).toEqual('error');
  });

  it('should return error message "Something went wrong" when status is 500', () => {
    const error = {
      response: {
        status: 500,
      },
    };
    expect(ErrorHandler(error)).toEqual('Something went wrong');
  });

  it('should return error message', () => {
    const error = {
      response: {
        data: {},
      },
    };
    expect(ErrorHandler(error)).toEqual({});
  });

  it('should return error message "Something went wrong" when error data is undefined', () => {
    const error = {
      response: {
        data: undefined,
      },
    };
    expect(ErrorHandler(error)).toEqual('Something went wrong');
  });

  it('should return error message "Something went wrong" when data object is error', () => {
    const error = {
      response: {
        data: {
          errors: [],
        },
      },
    };
    expect(ErrorHandler(error)).toEqual('Something went wrong');
  });
});
