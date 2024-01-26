import "reflect-metadata"
import  Koa from 'koa'
import { config } from "./config/index";
import { mainRouter } from "./starters/routes";
import { AppDataSource } from "./data-source";
const { PORT } = config;
const app = new Koa();

AppDataSource.initialize().then(() => {
    console.log('connection')
})
// app.use(async (ctx: any, next: Koa.Next) => {
//   ctx.body = 'Hello World';
//   // let res = await DB.insert(Users).values({
//   //   name: "Abubakir"
//   // }).returning()
//   let res = await DB.select().from(Users);
//   next()
  
// });

mainRouter(app)


app.listen(PORT, () => {
    console.log(`App running on ${PORT} 🚀`)
});
