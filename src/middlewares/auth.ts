import * as Koa from "koa";
export function auth(...roles: any) {
    return async function (ctx: Koa.BaseContext, next: () => Promise<any>) {
        console.log('this is auth middleware!')
        await next()   
    }
}