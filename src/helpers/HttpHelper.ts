import { HttpResponseSuccess, HttpResponseError } from '../protocols';

export class HttpHelper<T = any> {
  public ok (data: T): HttpResponseSuccess<T> {
    return { statusCode: 200, data };
  };

  public badRequest (errorMessage: string): HttpResponseError {
    return { statusCode: 400, errorMessage };
  };

  public serverError (): HttpResponseError {
    return { statusCode: 500 };
  };
};
