import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";
import { createAccountDto, loginDto} from "./user_Dto/users.dto.js"
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service.js";
import { Prisma,User } from "../generated/prisma/client.js";
import { createUserDto } from "../auth/auth-dto/auth.dto.js";
@Injectable()
export class UserService {
    constructor(
        private readonly prisma:PrismaService
    ){
    }

async  createAccount(account:Prisma.UserCreateInput):Promise<Prisma.UserWhereInput>{
    
    return account;
}

login(body:loginDto):loginDto{
 return body
}
}