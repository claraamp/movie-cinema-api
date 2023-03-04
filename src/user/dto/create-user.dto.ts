import { User } from "../entities/user.entity";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto extends User {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}
