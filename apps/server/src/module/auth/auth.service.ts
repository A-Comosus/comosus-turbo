import { Injectable, Logger } from '@nestjs/common';
import {
  LoginInput,
  LoginSuccess,
  RegisterInput,
  RegisterSuccess,
} from './dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@src/module/user';
import { ResponseError } from '@src/utils';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  private async generateJWT(payload: string | object | Buffer) {
    return await this.jwtService.signAsync(payload);
  }

  async register(input: RegisterInput) {
    if (!input.acceptTerms)
      return new ResponseError('User did not accept terms and conditions');

    const password = await bcrypt.hash(input.password, 10);
    const user = await this.userService.create({ ...input, password });

    const accessToken = await this.generateJWT({
      sub: user.id,
      email: user.email,
      username: user.username,
    });

    return new RegisterSuccess('Registration successful', {
      accessToken,
      user,
    });
  }

  async login(input: LoginInput) {
    const user = await this.userService.findOneByEmail(input.email);
    if (!user) return new ResponseError(`Credential does not match`);

    const isValidLogin = await bcrypt.compare(input.password, user.password);
    if (!isValidLogin) return new ResponseError(`Credential does not match`);

    const accessToken = await this.generateJWT({
      sub: user.id,
      email: user.email,
      username: user.username,
    });

    return new LoginSuccess('Login successful', {
      accessToken,
      user,
    });
  }
}
