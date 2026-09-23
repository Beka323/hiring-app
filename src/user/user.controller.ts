import {Controller ,Post ,Body,UsePipes} from  "@nestjs/common"
import { UserService } from "./user.service.js"
import { createAccountDto,loginDto} from "./user_Dto/users.dto.js"
import { validatorPipe } from "./pipe/custom_validation-pip.js"


@Controller()
export class UserController {
  constructor(private readonly userService:UserService ){}

@Post("signin")
@UsePipes(validatorPipe)

creatAccount(@Body() body:createAccountDto):createAccountDto{
  return this.userService.createAccount(body)
}
@Post("login")
login(@Body(new validatorPipe() ) body:loginDto):loginDto{
  return this.userService.login(body)
}

}
