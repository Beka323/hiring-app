import {ArgumentMetadata,PipeTransform,Injectable,BadRequestException,} from "@nestjs/common"
import { validate } from "class-validator"
import { plainToInstance } from "class-transformer"


@Injectable()
export class validatorPipe implements PipeTransform {
   async  transform(value :any ,{metatype } :ArgumentMetadata){
if(!metatype || !this.toValidate(metatype)){

    return value
}
   const objectValue = plainToInstance(metatype,value) 
   const errors = await validate(objectValue)
if(errors.length  > 0 ) {
    throw new BadRequestException(" Falid to validate ")
}
    return value

   }

   toValidate(metatype:Function ):boolean {
    const types:Function[] = [String,Boolean,Number,Object]
    return !types.includes(metatype)
   }
   }

