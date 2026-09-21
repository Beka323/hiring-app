import { Injectable } from "@nestjs/common";
import { creatUserDto } from "./user_Dto/users.dto.js"
import { LargeNumberLike } from "crypto";
@Injectable()
export class UserService{

    getUser():string {
        return "user"
    } 
    addUser(body:creatUserDto):{success:true}{
        console.log(body.name,body.password)
        return {success:true}
        
    }
    getUserId(id:string):string{
        console.log(id)
        return "user has been found"
    }
}