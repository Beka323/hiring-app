import { Injectable } from "@nestjs/common";
import { createUserDto,loginUserDto } from "./auth-dto/auth.dto.js";

@Injectable()
export class AuthService{
  /*  findAllUser(user):string{
         console.log(this.mockDb())
        

    }
*/
    signin(userInfo:createUserDto):string {
        console.log(userInfo)
        return 'signin'
    }
    login(loginInfo:loginUserDto):string { 
        console.log(loginInfo)
        return "login"
    }
}