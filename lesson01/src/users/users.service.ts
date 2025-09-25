import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    public getUsers(): string {
        return "List of users from service";
    }
}
