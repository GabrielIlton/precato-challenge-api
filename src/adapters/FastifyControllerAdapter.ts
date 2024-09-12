import { FastifyRequest, FastifyReply } from 'fastify';

import { HttpResponseSuccess, HttpResponseError } from '../helpers';
import { Controller } from '../protocols';

export const adaptFastifyController = (controller: Controller) => {
  return async (request: FastifyRequest, response: FastifyReply): Promise<void> => {
    const { params, query, body } = request; 

    const httpRequest = {
      ...params ?? {},
      ...query ?? {},
      ...body ?? {}
    };

    try {
      const httpResponse = await controller.handle(httpRequest);

      const { statusCode, data } = httpResponse;

      return HttpResponseSuccess(response, data, statusCode);
    } catch (error: any) {
      return HttpResponseError(error, response);
    }
  };
};
