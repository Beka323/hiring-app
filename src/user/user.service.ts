import { Injectable } from "@nestjs/common";
import { createAccountDto, loginDto} from "./user_Dto/users.dto.js"
import { ConfigService } from "@nestjs/config";
@Injectable()
export class UserService {
    constructor(
    ){}
 createAccount(account:createAccountDto):createAccountDto{
    return account
}
login(body:loginDto):loginDto{
    
 return body
}
}