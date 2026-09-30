import { IsString,IsEmail,Length,MinLength,MaxLength } from "class-validator"

export class  createAccountDto{
    @IsString()
    userName:string;
   
    @IsEmail()
    Email:string;
   
    @Length(0,15)
    phoneNumber:number;
  
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