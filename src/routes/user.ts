import Router from "koa-router";
import { auth } from "../middlewares/auth";
import * as Koa from "koa";
const userRouter = new Router();


userRouter.get("/user", (ctx, next) => {
    ctx.body = 'This is from Router!'
});


userRouter.get('/another', auth(), (ctx: Koa.BaseContext, next: () => Promise<any>) => {
    ctx.body = 'Another'
})

export default userRouter;
