import { ApiResponseProperty } from "@nestjs/swagger";


export class ApiResponse<T> {

    @ApiResponseProperty({ example: 'success' })
    message: string;

    @ApiResponseProperty({ example: '200' })
    statusCode: String;

    @ApiResponseProperty({ example: '{ "name" : "John Doe" }' })
    data: T;



    public static of<T>(message: string, statusCode: string, data: T): ApiResponse<T> {
        const apiResponse = new ApiResponse<T>();
        apiResponse.message = message;
        apiResponse.statusCode = statusCode;
        apiResponse.data = data;
        return apiResponse;
    }



}

