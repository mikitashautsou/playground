import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectEntity } from "./project.entity";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProjectEntity])],
    providers: [ProjectsService],
    controllers: [ProjectsController],
  })
export class ProjectsModule {}