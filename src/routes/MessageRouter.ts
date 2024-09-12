import { FastifyInstance } from 'fastify';

import { makeUpdateMessageControllerFactory, makeGetMessageByStatusController } from '../factories';

import { adaptFastifyController } from '../adapters';

export default async function (router: FastifyInstance) {
  router.get('/messages', adaptFastifyController(makeGetMessageByStatusController()));
  
  router.put('/messages/:id', adaptFastifyController(makeUpdateMessageControllerFactory()));
};
