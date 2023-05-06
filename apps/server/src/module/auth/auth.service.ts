import { Injectable, Logger } from '@nestjs/common';
import { RegisterInput, RegisterResponseDTO } from './dto';

@Injectable()
export class AuthService {
  readonly logger = new Logger(AuthService.name);

  regiser(input: RegisterInput): typeof RegisterResponseDTO {
    try {
      this.logger.log(input);
      return {
        result: 'success',
        message: 'Registration successful',
        data: {
          accessToken: 'some token',
          user: 'some user',
        },
      };
    } catch (error) {
      return {
        result: 'error',
        message: 'Registration failed',
      };
    }
  }
}
