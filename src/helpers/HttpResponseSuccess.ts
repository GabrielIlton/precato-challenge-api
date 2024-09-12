export const HttpResponseSuccess = (response: any, data?: any, statusCode: number = 200) =>
  response.status(statusCode).send({ success: true, data });
