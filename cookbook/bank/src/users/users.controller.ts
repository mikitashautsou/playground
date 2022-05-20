import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SignUpDTO } from './dtos/sign-up.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { usersService } from './projects.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: usersService) { }

    @Post()
    async signUp(@Body() signUpUser: SignUpDTO) {
        return await this.usersService.create(new UserEntity(signUpUser))
    }

    @Get()
    async getAll() {
        return await this.usersService.readAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.usersService.readById(id)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() signUpUser: UpdateUserDTO) {
        return await this.usersService.update(id, new UserEntity(signUpUser))
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        return await this.usersService.delete(id)
    }

}