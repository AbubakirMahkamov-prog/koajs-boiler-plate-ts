import * as Koa from "koa";
import userRouter  from "../routes/user";


export async function mainRouter (app: Koa) {
    app.use(userRouter.routes())
}