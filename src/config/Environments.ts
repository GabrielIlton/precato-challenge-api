import * as dotenv from 'dotenv';
dotenv.config();

export const Environments = {
  PORT: Number(process.env.PORT) || 3000,

  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME
};
