import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class usersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.usersRepository.save(user);
  }

  async readById(id: string): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ id });
  }

  async readAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async update(id: string, user: UserEntity): Promise<void> {
     const result = await this.usersRepository.update(id, user);
     console.log(result)
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}