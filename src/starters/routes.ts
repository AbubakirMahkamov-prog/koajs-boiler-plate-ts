import * as Koa from "koa";
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import koaBodyParse from "koa-bodyparser";
import koaJson from "koa-json";

//routers
import userRouter  from "../routes/user";
import authRouter  from "../routes/auth";
export async function mainRouter (app: Koa) {
    app.use(koaJson())
    app.use(logger())
    app.use(koaBodyParse())
    app.use(helmet())
    app.use(userRouter.routes())
    app.use(authRouter.routes())
}