export type HttpResponseSuccess<T> = {
  statusCode: number,
  data?: T
};

export type HttpResponseError = {
  statusCode: number,
  errorMessage?: any
};
