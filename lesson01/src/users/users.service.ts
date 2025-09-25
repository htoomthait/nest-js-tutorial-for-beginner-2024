import { Injectable } from '@nestjs/common';
import { UserListRespDto } from './dto/respond/UserListRespDto';
import { dummyUsers } from './dummy/data';

@Injectable()
export class UsersService {

    public getUsers(): UserListRespDto {
        // get dummy users
        const users = dummyUsers;

        // create response object
        const response: UserListRespDto = {
            users: users,
            total: users.length
        };

        return response;
    }
}
