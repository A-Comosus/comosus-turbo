import { Injectable, Logger } from '@nestjs/common';
import {
  LoginInput,
  LoginResponseDTO,
  RegisterInput,
  RegisterResponseDTO,
} from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@src/module/system';

@Injectable()
export class AuthService {
  readonly logger = new Logger(AuthService.name);

  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  private async generateJWT(payload: string | object | Buffer) {
    return await this.jwtService.signAsync(payload);
  }

  async regiser(input: RegisterInput): Promise<typeof RegisterResponseDTO> {
    try {
      const accessToken = await this.generateJWT(input);
      const user = 'some user';
      return {
        result: 'success',
        message: 'Registration successful',
        data: {
          accessToken,
          user,
        },
      };
    } catch (error) {
      return {
        result: 'error',
        message: 'Registration failed',
      };
    }
  }

  async login(input: LoginInput): Promise<typeof LoginResponseDTO> {
    try {
      // check if user exists
      const user = 'some user';

      // check if password match
      // give him a token and return the user object
      const accessToken = await this.generateJWT(input);

      return {
        result: 'success',
        message: 'Login successful',
        data: {
          accessToken,
          user,
        },
      };
    } catch (error) {
      return {
        result: 'error',
        message: 'Login failed',
      };
    }
  }
}
