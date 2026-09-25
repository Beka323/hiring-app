import { Injectable } from "@nestjs/common";
import { createAccountDto, loginDto} from "./user_Dto/users.dto.js"
import { InjectDrizzle } from "@nestjs/drizzle";
import  type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { userTable,type User,type NewUser } from "./user-db/user-schema.js";
@Injectable()
export class UserService{
  constructor(@InjectDrizzle() private db : NodePgDatabase) {}

 createAccount(account:createAccountDto):createAccountDto{
     const createdUserAcc: {id:number; userName: string;password:string } = {id:1, userName:"Bereket",password:"hellohjfdhfhgfhghf"}
      this.db.insert(userTable).values(createdUserAcc)
return account
}
login(body:loginDto):loginDto{
    
 return body
}
}