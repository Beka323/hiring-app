import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module.js"
import { DrizzleModule } from '@nestjs/drizzle';
import { drizzle } from 'drizzle-orm/node-postgres';
import { from } from 'rxjs';
import { ConfigModule,ConfigService } from "@nestjs/config"
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
  UserModule,
 DrizzleModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:async (configService:ConfigService) => ({
      drizzle,
      connection:configService.getOrThrow<string>("DATABASE_URL")
    })
  })],
  controllers: [],
  providers: []
})
export class AppModule {}
