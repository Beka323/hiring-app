import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module.js"
import { from } from 'rxjs';
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
