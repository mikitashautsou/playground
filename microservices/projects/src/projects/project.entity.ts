
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(initialValues: Partial<ProjectEntity>) {
    Object.assign(this, initialValues)
  }
}