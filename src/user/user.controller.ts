import {Controller ,Post ,Body} from  "@nestjs/common"
import { UserService } from "./user.service.js"
import { createAccountDto,loginDto} from "./user_Dto/users.dto.js"
import type { Request, Response } from "express"
@Controller()
export class UserController {
  constructor(private readonly userService:UserService ){}

@Post("signin")
creatAccount(@Body() body:createAccountDto):string{
  return this.userService.createAccount(body)
}
@Post("login")
login(@Body() body:loginDto):loginDto{
  return this.userService.login(body)
}

}
