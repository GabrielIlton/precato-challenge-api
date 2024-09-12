export const HttpResponseError = (error: any, response: any) => {
  const errorMessage = error.errorMessage || error.message || String(error);
  const errorStatus = error.statusCode || error.error_code || 422;

  response.status(errorStatus).send({ success: false, code: errorStatus, error_message: errorMessage });
};
