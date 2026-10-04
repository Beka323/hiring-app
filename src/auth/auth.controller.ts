import { Controller,Post,Body,Put } from "@nestjs/common"
import { AuthService } from "./auth.service.js";
import { createUserDto,loginUserDto } from "./auth-dto/auth.dto.js";

@Controller("auth")
export class AuthController{

    constructor(
        private authService:AuthService
    ){}
 @Post("signin")
  async  signin(@Body() userInfo:createUserDto ):Promise<string> {
      return this.authService.signin(userInfo)
}  


@Post("login")
login(@Body() loginInfo:loginUserDto):string{ 
    return this.authService.login(loginInfo)
}

@Post("email/verify")
verifyEmail(){}

@Post("email/verification")
emailVerification(){}

@Put('/reset-password')
resetPassword(){}


}