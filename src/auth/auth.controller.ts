import { Controller,Post,Body,Get } from "@nestjs/common"
import { AuthService } from "./auth.service.js";
import { createUserDto,loginUserDto } from "./auth-dto/auth.dto.js";

@Controller("auth")
export class AuthController{

    constructor(
        private authService:AuthService
    ){}
 @Post("signin")
    signin(@Body() userInfo:createUserDto ):string {
      return  this.authService.signin(userInfo)
}  


@Post("login")
login(@Body() loginInfo:loginUserDto):string{ 
    return this.authService.login(loginInfo)
}
}