import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usersService } from "./projects.service";
import { UserEntity } from "./user.entity";
import { UsersController } from "./users.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [usersService],
    controllers: [UsersController],
  })
export class UsersModule {}