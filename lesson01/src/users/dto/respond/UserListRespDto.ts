import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "./UserDto";

export class UserListRespDto {
    @ApiProperty({ type: [UserDto], description: 'List of users' })
    users: UserDto[];

    @ApiProperty({ example: 100, description: 'Total number of users' })
    total: number;
}