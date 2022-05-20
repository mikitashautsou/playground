import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectsRepository: Repository<ProjectEntity>,
  ) {}

  async create(project: ProjectEntity): Promise<ProjectEntity> {
    const result = await this.projectsRepository.save(project);
    console.log({ result })
    return result
  }

  async findAll(): Promise<ProjectEntity[]> {
    const result = await this.projectsRepository.find();
    console.log({ result })
    return result
  }

  async remove(id: string): Promise<void> {
    await this.projectsRepository.delete(id);
  }

}