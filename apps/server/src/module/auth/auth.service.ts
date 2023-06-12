import { Injectable, Logger } from '@nestjs/common';
import {
  LoginInput,
  LoginSuccess,
  StartVerificationInput,
  RegisterInput,
  RegisterSuccess,
  VerifyUserInput,
} from './dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../module/user';
import { ResponseSuccessWithoutData, ResponseError } from '../../utils';
import bcrypt from 'bcrypt';
import { ExternalService } from '../../system/external';
import { ConfigService } from '../../system/config';
import { User } from '@prisma/client';

type JwtPayload = {
  id: string;
  email: string;
  username: string;
};

@Injectable()
export class AuthService {
  readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
    private externalService: ExternalService,
  ) {}

  private async generateJWT({
    user,
    options,
  }: {
    user: User;
    options?: Partial<{
      expiresIn: number;
      secret: string;
    }>;
  }) {
    const payload: JwtPayload = {
      id: user.id.toString(),
      email: user.email,
      username: user.username,
    };

    return await this.jwtService.signAsync(payload, {
      ...options,
    });
  }

  private async verifyJWT({
    token,
    secret,
  }: {
    token: string;
    secret: string;
  }): Promise<JwtPayload> {
    return await this.jwtService.verifyAsync(token, { secret });
  }

  async register(input: RegisterInput) {
    if (!input.acceptTerms)
      return new ResponseError('User did not accept terms and conditions');

    const password = await bcrypt.hash(input.password, 10);
    const user = await this.userService.create({ ...input, password });

    const accessToken = await this.generateJWT({
      user,
    });

    this.startVerification(user);

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
      user,
    });

    return new LoginSuccess('Login successful', {
      accessToken,
      user,
    });
  }

  async startVerification({ email }: StartVerificationInput) {
    const user = await this.userService.findOneByEmail(email);
    if (!user)
      return new ResponseError(`No user is associated with the email provided`);

    const oneTimeToken = await this.generateJWT({
      user,
      options: {
        expiresIn: 60 * 60 * 24,
        secret: this.configService.oneTimeTokenSecret,
      },
    });

    const verificationLink = `${this.configService.clientBaseUrl}/account/verify-email?token=${oneTimeToken}`;

    this.externalService.sendPlainEmail({
      from: this.configService.senderEmailAddress,
      to: user.email,
      subject: 'Suppose to be verification email',
      body: `
      Hey there!

      <a href="${verificationLink}">Click here to verify your email</a>
      `,
    });

    return new ResponseSuccessWithoutData('New verification email sent!');
  }

  async verifyUser({ token }: VerifyUserInput) {
    const { email } = await this.verifyJWT({
      token,
      secret: this.configService.oneTimeTokenSecret,
    });

    const user = await this.userService.findOneByEmail(email);
    if (!user)
      return new ResponseError(`No user is associated with the email provided`);

    this.userService.update({
      where: {
        email,
      },
      data: {
        status: 'VERIFIED',
      },
    });

    return new ResponseSuccessWithoutData('User has been verified');
  }
}
