import { RespondMessage } from "./RespondMessage";

export const respondMessages: RespondMessage[] =
    [
        // User related messages
        { "code": "U-001", "httpStatus": 200, "message": "Users fetched successfully" },
        { "code": "U-002", "httpStatus": 201, "message": "User created successfully" },
        { "code": "U-003", "httpStatus": 200, "message": "User updated successfully" },
        { "code": "U-004", "httpStatus": 200, "message": "User deleted successfully" },
        { "code": "U-005", "httpStatus": 404, "message": "User not found" },
        { "code": "U-006", "httpStatus": 400, "message": "Invalid user data" },
        { "code": "U-007", "httpStatus": 500, "message": "Internal server error" },
    ];

