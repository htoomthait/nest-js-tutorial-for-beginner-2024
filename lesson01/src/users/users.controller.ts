import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserListRespDto } from './dto/respond/UserListRespDto';
import { ApiResponse } from 'src/generic/respond/dto/ApiResponse';

@Controller('api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @Get()
    getUsers(): ApiResponse<UserListRespDto> {
        return this.usersService.getUsers();
    }
}
