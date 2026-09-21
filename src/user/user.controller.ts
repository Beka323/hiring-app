import {Controller ,Get,Post ,Body,Param,Res,Req} from  "@nestjs/common"
import { UserService } from "./user.service.js"
import { creatUserDto } from "./user_Dto/users.dto.js"
import type { Request, Response } from "express"
@Controller()
export class UserController {
  constructor(private readonly userService:UserService ){}

@Get("user")
getuser():string{
  return this.userService.getUser()
}

@Post("signin")
addNewUser(@Body() body : creatUserDto):{success:boolean}{
  return this.userService.addUser(body)
}
@Get(":id")
getUserId(@Param() id:string):string{
return this.userService.getUserId(id)
}

}
