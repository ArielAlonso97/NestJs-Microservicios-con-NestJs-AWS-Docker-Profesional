import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(req: any): Promise<{
        access_token: string;
    }>;
    signUp(userDto: CreateUserDto): Promise<import("../common/interfaces/user.interface").IUser>;
}
