import { Module} from "@nestjs/common";
import {UserController} from "./user.controller.js"
import {UserService } from "./user.service.js"
import { PrismaModule } from "../prisma/prisma.module.js";
import { PrismaService } from "../prisma/prisma.service.js"
@Module({
imports:[PrismaModule],
controllers:[UserController],
providers:[UserService,PrismaService]
})

export class UserModule{}