import { AppDataSource } from "./data-source";
export async function dbConnect() {
    try {
        await AppDataSource.initialize()
        console.log('Connection has been established successfully!');
    } catch(err) {
        console.error('Unable to connect to the database:', err);
    }
}