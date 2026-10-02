import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module.js"
import { from } from 'rxjs';
import { ConfigModule, ConfigService } from "@nestjs/config"
import { FormModule } from "./form/form.module.js"
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from "./prisma/prisma.module.js"
@Module({
imports:[UserModule,
  FormModule,
  PrismaModule,
  AuthModule,
  ConfigModule.forRoot({
  isGlobal:true
})],
controllers:[],
providers:[]
})

export class AppModule {}
