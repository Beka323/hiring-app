import { Injectable } from "@nestjs/common";
import { createAccountDto, loginDto} from "./user_Dto/users.dto.js"

@Injectable()
export class UserService{
     createAccount(account:createAccountDto):createAccountDto{
        console.log(account)
return account
}
login(body:loginDto):loginDto{
    
 return body
}
}