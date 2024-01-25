import * as Koa from "koa";
import userRouter  from "../routes/user";


export async function Router (app: Koa) {
    app.use(userRouter.routes())
}