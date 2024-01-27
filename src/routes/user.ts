import Router from "koa-router";
import { auth } from "../middlewares/auth";
import * as Koa from "koa";
import UserController from "../controllers/userController";


const userController = new UserController();
const userRouter = new Router({ prefix: '/user' });

userRouter.post("/", userController.create)

export default userRouter;
