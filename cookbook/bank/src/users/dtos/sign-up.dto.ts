import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class SignUpDTO {

    @ApiProperty()
    @IsNotEmpty()
    fullName: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    passportNumber: string

    @ApiProperty()
    @IsPhoneNumber()
    phoneNumber: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

}