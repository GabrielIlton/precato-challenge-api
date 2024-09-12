import { join as PathJoin } from 'path';
import { DataSource } from 'typeorm';

import { Environments } from '../config';

export const AppDatabase = new DataSource({
  type: 'postgres',
  host: Environments.DB_HOST,
  port: Environments.DB_PORT,
  username: Environments.DB_USERNAME,
  password: Environments.DB_PASSWORD,
  database: Environments.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [PathJoin(__dirname, '../entities/*.ts')],
  migrations: [],
  subscribers: []
});

AppDatabase.initialize()
  .then(() => {})
  .catch(error => console.error('Initialize Database Error', error));
