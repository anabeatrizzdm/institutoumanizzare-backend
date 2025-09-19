import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // carrega variáveis do .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'instituto',
  entities: ['src/**/*.model{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
