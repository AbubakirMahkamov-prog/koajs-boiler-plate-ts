import "reflect-metadata"
import  Koa from 'koa'
import { config } from "./config/index";
import { mainRouter } from "./starters/routes";
import { dbConnect } from "./db";
dbConnect()
const { PORT } = config;
const app = new Koa();

mainRouter(app)

app.listen(PORT, () => {
    console.log(`App running on ${PORT} 🚀`)
});
