

import  Koa from 'koa'
import { DB } from './db/db'
import { Users } from "./db/schema";
import { config } from "./config/index";
const { PORT } = config;
const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
  // let res = await DB.insert(Users).values({
  //   name: "Abubakir"
  // }).returning()
  let res = await DB.select().from(Users);
});


app.listen(PORT, () => {
    console.log(`App running on ${PORT} 🚀`)
});