import dotenv from 'dotenv'

dotenv.config();
 
export const config = {
    PORT: process.env.PORT,
    DB_PORT : process.env.DB_PORT,
    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PASS : process.env.DB_PASS,
    DB_NAME : process.env.DB_NAME,
    NODE_ENV : process.env.NODE_ENV,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    SESSION_KEY: process.env.SESSION_KEY,
}