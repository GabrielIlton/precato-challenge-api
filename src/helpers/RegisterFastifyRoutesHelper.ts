import { FastifyInstance } from 'fastify';
import { join as PathJoin } from 'path';
import { readdirSync } from 'fs';

export const RegisterFastifyRoutesHelper = (app: FastifyInstance) => {
  readdirSync(PathJoin(__dirname, '../routes')).forEach(file => app.register(require(`../routes/${file}`)));
};
