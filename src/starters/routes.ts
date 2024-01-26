import * as Koa from "koa";
import userRouter  from "../routes/user";
import logger from 'koa-logger';
import helmet from 'koa-helmet';


export async function mainRouter (app: Koa) {
    app.use(logger())
    app.use(helmet())
    app.use(userRouter.routes())
}