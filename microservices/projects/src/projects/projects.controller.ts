import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDTO } from './create-project.dto'
import { ProjectEntity } from './project.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {

  constructor(private projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    console.log({ createProjectDTO})
    return await this.projectsService.create(new ProjectEntity(createProjectDTO))
  }

  @Get()
  async findAll() {
    const result = await this.projectsService.findAll()
    console.log(result);
    
    return result
  }
}