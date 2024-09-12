import Fastify from 'fastify';

import { RegisterFastifyRoutesHelper } from './helpers';

import { AppDatabase } from './infra';

export const buildApp = async () => {
  const fastify = Fastify({ logger: true });

  await AppDatabase.initialize();

  RegisterFastifyRoutesHelper(fastify);

  return fastify;
};
