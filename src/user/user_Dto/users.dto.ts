import { IsString,IsEmail,Length,MinLength,MaxLength } from "class-validator"

export class  createAccountDto{
    @IsString()
    username:string;
   
    @IsEmail()
    email:string;
  
    @IsString()
    @MaxLength(15,{
        message:"password is too long"
    })
    @MinLength(5,{
        message:"password is to short"
    })
   
    password:string;
}



export class loginDto {
    @IsEmail()
    Email:string;
    @IsString()
    password:string;
}