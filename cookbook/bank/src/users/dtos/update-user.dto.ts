import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class UpdateUserDTO {

    @ApiProperty()
    fullName: string

    @ApiProperty()
    email: string

    @ApiProperty()
    passportNumber: string

    @ApiProperty()
    phoneNumber: string

    @ApiProperty()
    password: string

}