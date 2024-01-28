import Router from "koa-router";
import { auth } from "../middlewares/auth";
import * as Koa from "koa";
import AuthController from "../controllers/authController";


const authController = new AuthController();
const authRouter = new Router({ prefix: '/auth' });

authRouter.post("/login", authController.login)
authRouter.get('/refresh', authController.refresh)

export default authRouter;
