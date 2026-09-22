import { Injectable } from "@nestjs/common";
import { createAccountDto, loginDto} from "./user_Dto/users.dto.js"

@Injectable()
export class UserService{
     createAccount(account:createAccountDto):string{
        console.log(account)
return "hello"
}
login(body:loginDto):loginDto{
    
 return body
}
}