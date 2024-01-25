import Router from "koa-router";
const userRouter = new Router();

userRouter.get("/user", (ctx, next) => {
    ctx.body = 'This is from Router!'
});

export default userRouter;
