import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module.js"
import { from } from 'rxjs';
import { ConfigModule,ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm" 
import { UserEntity } from './user/user-db/user-entity.js';
@Module({
  imports:[UserModule,ConfigModule.forRoot({
    isGlobal:true
  }),TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:(configService:ConfigService) => ({
      type:'postgres',
      host:configService.getOrThrow<string>("DB_HOST"),
      port:configService.getOrThrow<number>("DB_PORT"),
      username:configService.getOrThrow<string>("DB_USERNAME"),
      password:configService.getOrThrow<string>("DB_PASSWORD"),
      database:configService.getOrThrow<string>("DB"),
      entities:[UserEntity],
      synchronize:true
    })
  })],
controllers:[],
providers:[]
})

export class AppModule {}
