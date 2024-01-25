import dotenv from 'dotenv'

dotenv.config();
 
export const config = {
    PORT: process.env.PORT,
    DB_PORT : process.env.DB_PORT,
    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PASS : process.env.DB_PASS,
    DB_NAME : process.env.DB_NAME,
}