import { UserDto } from "../dto/respond/UserDto";

export const dummyUsers: UserDto[] = [
    {
        id: '1',
        username: 'johndoe',
        email: 'johndoe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        isActive: true,
        createdAt: '2022-01-01T00:00:00Z',
        updatedAt: '2022-01-02T00:00:00Z'
    },
    {
        id: '2',
        username: 'janedoe',
        email: 'janedoe@example.com',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25,
        isActive: true,
        createdAt: '2022-01-01T00:00:00Z',
        updatedAt: '2022-01-02T00:00:00Z'
    },
    {
        id: '3',
        username: 'alice',
        email: 'alice@example.com',
        firstName: 'Alice',
        lastName: 'Wonderland',
        age: 28,
        isActive: true,
        createdAt: '2022-01-01T00:00:00Z',
        updatedAt: '2022-01-02T00:00:00Z'
    },
    {
        id: '4',
        username: 'bob',
        email: 'bob@example.com',
        firstName: 'Bob',
        lastName: 'Builder',
        age: 35,
        isActive: true,
        createdAt: '2022-01-01T00:00:00Z',
        updatedAt: '2022-01-02T00:00:00Z'
    },
    {
        id: '5',
        username: 'charlie',
        email: 'charlie@example.com',
        firstName: 'Charlie',
        lastName: 'Brown',
        age: 32,
        isActive: true,
        createdAt: '2022-01-01T00:00:00Z',
        updatedAt: '2022-01-02T00:00:00Z'
    },
    {
        id: '6',
        username: 'david',
        email: 'david@example.com',
        firstName: 'David',
        lastName: 'Smith',
        age: 40,
        isActive: true,
        createdAt: '2022-01-01T00:00:00Z',
        updatedAt: '2022-01-02T00:00:00Z'
    }
];