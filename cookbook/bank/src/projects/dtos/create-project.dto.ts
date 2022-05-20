import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDTO {

    @ApiProperty()
    name: string
}