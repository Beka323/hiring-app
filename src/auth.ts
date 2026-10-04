import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Prisma } from "./generated/prisma/client.js";
const auth = betterAuth({
    database:prismaAdapter(Prisma,{
        provider:"postgresql"
    }),
    baseURL:process.env.BETTER_AUTH_URL
})
export default auth;