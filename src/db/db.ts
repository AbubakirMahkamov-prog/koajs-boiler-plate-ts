import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema'

const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const CONNECTION_STRING = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const migrationsClient = postgres(CONNECTION_STRING, {
    max: 1,
});

const db = drizzle(migrationsClient);
await migrate(db, { migrationsFolder: '../../migrations' });

const queryClient = postgres(CONNECTION_STRING);
const DrizzleClient = drizzle(queryClient, {
    schema
});


export const DB = DrizzleClient;