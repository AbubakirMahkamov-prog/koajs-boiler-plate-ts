import * as Koa from "koa";
import userRouter  from "../routes/user";
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import koaBodyParse from "koa-bodyparser";
import koaJson from "koa-json";
export async function mainRouter (app: Koa) {
    app.use(koaJson())
    app.use(logger())
    app.use(koaBodyParse())
    app.use(helmet())
    app.use(userRouter.routes())
}