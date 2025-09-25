import { Injectable } from '@nestjs/common';
import { UserListRespDto } from './dto/respond/UserListRespDto';
import { dummyUsers } from './dummy/data';
import { ApiResponse } from 'src/generic/respond/dto/ApiResponse';
import { UserDto } from './dto/respond/UserDto';
import { respondMessages } from 'src/generic/respond/message/respond.messges';

@Injectable()
export class UsersService {

    public getUsers(): ApiResponse<UserListRespDto> {
        // get dummy users
        const users: UserDto[] = dummyUsers;

        // create response object
        const response: UserListRespDto = UserListRespDto.of(users, users.length);


        // return response
        return ApiResponse.of<UserListRespDto>(
            respondMessages.find(s => s.code === 'U-001')?.message ?? '',
            respondMessages.find(s => s.code === 'U-001')?.code ?? '',
            response, // we can set null for data if we want to hide the data (e.g., for security reasons)
        );


    }
}

