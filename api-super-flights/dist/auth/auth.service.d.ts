import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    signIn(user: any): Promise<{
        access_token: string;
    }>;
    signUp(userDTO: CreateUserDto): Promise<import("../common/interfaces/user.interface").IUser>;
}
