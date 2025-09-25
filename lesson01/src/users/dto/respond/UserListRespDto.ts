import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "./UserDto";


export class UserListRespDto {
    @ApiProperty({ type: [UserDto], description: 'List of users' })
    users: UserDto[];

    @ApiProperty({ example: 100, description: 'Total number of users' })
    total: number;


    public static of(users: UserDto[], total: number): UserListRespDto {
        const resp = new UserListRespDto();
        resp.users = users;
        resp.total = total;
        return resp;
    }
}