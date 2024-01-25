import Koa from 'koa'
import { DB } from '../db/db.js'
import { Users } from "../db/schema.js";
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
  // let res = await DB.insert(Users).values({
  //   name: "Abubakir"
  // }).returning()
  let res = await DB.select().from(Users);
  console.log(res)
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App running on ${PORT} 🚀`)
});