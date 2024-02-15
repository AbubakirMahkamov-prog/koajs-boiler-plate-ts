import * as Koa from "koa";
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import koaBodyParse from "koa-bodyparser";
import koaJson from "koa-json";
import Session from 'koa-session';
import { config } from "../config/index";
//routers
import userRouter  from "../routes/user";
import authRouter  from "../routes/auth";
export async function mainRouter (app: Koa) {
    //session config
    app.keys = [
        config.SESSION_KEY ? config.SESSION_KEY: ''
    ]
    app.use(Session(app));

    app.use(async (ctx, next) => {
        // Increment visit count
        if (ctx.session) {
            ctx.session.views = (ctx.session?.views ?? 0) + 1;
        }
        await next();
    });
    // Example route
    app.use(async (ctx, next) => {
        // Access session data;
        console.log(ctx.session)
        await next()
    });
  
//session config
    app.use(koaJson())
    app.use(logger())
    app.use(koaBodyParse())
    app.use(helmet())
    app.use(userRouter.routes())
    app.use(authRouter.routes())
}