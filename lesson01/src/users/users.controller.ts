import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserListRespDto } from './dto/respond/UserListRespDto';

@Controller('api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @Get()
    getUsers(): UserListRespDto {
        return this.usersService.getUsers();
    }
}
