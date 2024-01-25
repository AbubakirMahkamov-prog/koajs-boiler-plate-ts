import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema'
import { config } from "../config/index";

const { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT } = config


const CONNECTION_STRING = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const migrationsClient = postgres(CONNECTION_STRING, {
    max: 1,
});

const db = drizzle(migrationsClient);
await migrate(db, { migrationsFolder: './migrations' });

const queryClient = postgres(CONNECTION_STRING);
const DrizzleClient = drizzle(queryClient, {
    schema
});


export const DB = DrizzleClient;