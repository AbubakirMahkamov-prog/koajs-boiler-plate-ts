import { User } from "../entity/User";
import * as Koa from "koa";
import type { UserLogin } from "../types/user";
import { AppDataSource } from "../data-source";
import bcrypt from "bcrypt";
class AuthController {

    login = async function (ctx: Koa.Context, next: () => Promise<any>) {
        let data = <UserLogin>ctx.request.body;
        if (!data.password) {
            ctx.status = 400;
            ctx.message = "Passoword is not sent!";
            ctx.body = "Bad request!"
            return
        };

        let user =  await AppDataSource.getRepository(User).
            createQueryBuilder('user').
            where("user.userName = :userName", {
                userName: data.userName
            }).getOne();

        if(!user) {
            ctx.status = 400;
            ctx.message = "User not found!";
            ctx.body = "Bad request!"
            return
        }
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (isMatch) {
            ctx.message = "Success!"
            ctx.body = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
            }
        } else {
            ctx.status = 400;
            ctx.message = "Password is not matched!";
            ctx.body = "Bad request!"
        }
    }

}

export default AuthController;