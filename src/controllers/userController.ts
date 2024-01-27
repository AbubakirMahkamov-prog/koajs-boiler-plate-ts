import { User } from "../entity/User";
import * as Koa from "koa";
import type { UserCreate } from "../types/user";
import { AppDataSource } from "../data-source";
import bcrypt from "bcrypt";
class UserController {
    create = async function (ctx: Koa.Context, next: () => Promise<any>) {
        
        let data = <UserCreate>ctx.request.body;
        let genSalt = await bcrypt.genSalt(10); 
        let hashedPassword = await bcrypt.hash(data.password, genSalt);
        let model = await AppDataSource.createQueryBuilder().insert().into(User).values([
            {
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName,
                password: hashedPassword
            }
        ]).returning(['id', 'firstName', 'lastName', 'userName', 'password']).execute()

        ctx.body = model.raw[0]
    }
}

export default UserController;