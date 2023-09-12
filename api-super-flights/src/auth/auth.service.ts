import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);

    const isValidPassword = await this.userService.checkPassword(
      password,
      user.password,
    );

    if (user && isValidPassword) return user;
    return null;
  }

  async signIn(user: any) {
    try {
      const payload = {
        username: user.username,
        sub: user._id,
      };
      const access_token = this.jwtService.sign(payload);
  
      return { access_token };
    } catch (error) {
      // Aquí puedes manejar el error de generación del token
      console.error('Error al generar el token JWT:', error.message);
      throw new Error('No se pudo generar el token JWT'); // Lanza una excepción personalizada o utiliza una existente
    }
  }
  

  async signUp(userDTO: CreateUserDto) {
    return this.userService.create(userDTO);
  }
}
