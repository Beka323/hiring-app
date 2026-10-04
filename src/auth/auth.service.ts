import { Injectable } from "@nestjs/common";
import { createUserDto,loginUserDto } from "./auth-dto/auth.dto.js"
import { PrismaService } from "../prisma/prisma.service.js"

@Injectable()
export class AuthService{
   async signin(userInfo:createUserDto):Promise<string> {
        return 'signin'
    }
    login(loginInfo:loginUserDto):string { 
        console.log(loginInfo)
        return "login"
    }
}