import { Injectable } from "@nestjs/common";
import { createAccountDto, loginDto} from "./user_Dto/users.dto.js"
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user-db/user-entity.js";
import { Repository } from "typeorm";
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
       private  userDb:Repository<UserEntity>
    ){}
 createAccount(account:createAccountDto):createAccountDto{
    this.userDb.insert(account)
    return account
}
login(body:loginDto):loginDto{
    
 return body
}
}