import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './projects/project.entity';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'test',
    //   database: 'projects',
    //   entities: [ProjectEntity],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot(),
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
