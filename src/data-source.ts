import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { config } from './config/index'
const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = config;
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
})
