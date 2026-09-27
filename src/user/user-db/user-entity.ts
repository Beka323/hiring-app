import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity("user")
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:Number;
   
    @Column()
    userName:string;
   
    @Column()
    Email:string;
   
    @Column()
    phoneNumber:Number;
   
    @Column()
    password:string;
}