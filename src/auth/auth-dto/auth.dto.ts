import { IsString,IsEmail,MinLength, MaxLength } from "class-validator";

export class createUserDto {
    @IsString()
    username:string;
    @IsEmail()
    email:string;
    @MaxLength(15,{
        message:"you password is long"
    })
    @MinLength(5,{
        message:"your password is short"
    })
    password:string;
}


export class loginUserDto {
    @IsString()
    username?:string;
    @IsEmail()
    email?:string;
    @IsString()
    password:string;
}