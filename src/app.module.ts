import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module.js"
import { from } from 'rxjs';
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
imports:[UserModule,ConfigModule.forRoot({
  isGlobal:true
})],
controllers:[],
providers:[]
})

export class AppModule {}
