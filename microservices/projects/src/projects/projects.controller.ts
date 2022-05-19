import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDTO } from './create-project.dto'

@Controller('projects')
export class ProjectsController {

  private projects: any[] = []

  @Post()
  create(@Body() createProject: CreateProjectDTO) {
    this.projects.push(createProject)
    return 'This action adds a new cat';
  }

  @Get()
  findAll() {
    return this.projects
  }
}