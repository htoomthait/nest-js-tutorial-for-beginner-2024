import { ApiProperty } from '@nestjs/swagger';
export class UserDto {

    @ApiProperty({ example: '1', description: 'The unique identifier of the user' })
    id: string;

    @ApiProperty({ example: 'johndoe', description: 'The username of the user' })
    username: string;

    @ApiProperty({ example: 'johndoe@example.com', description: 'The email of the user' })
    email: string;

    @ApiProperty({ example: 'John', description: 'The first name of the user' })
    firstName: string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
    lastName: string;

    @ApiProperty({ example: 30, description: 'The age of the user' })
    age: number;

    @ApiProperty({ example: true, description: 'Whether the user is active' })
    isActive: boolean;

    @ApiProperty({ example: '2022-01-01T00:00:00Z', description: 'The creation date of the user' })
    createdAt: string;

    @ApiProperty({ example: '2022-01-02T00:00:00Z', description: 'The last update date of the user' })
    updatedAt: string;
}