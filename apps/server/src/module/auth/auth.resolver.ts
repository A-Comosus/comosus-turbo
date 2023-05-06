import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  LoginInput,
  LoginResponseDTO,
  RegisterInput,
  RegisterResponseDTO,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '@src/guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => RegisterResponseDTO)
  register(@Args('input') input: RegisterInput) {
    return this.authService.regiser(input);
  }

  @Mutation(() => LoginResponseDTO)
  @UseGuards(JwtGuard)
  login(@Args('input') input: LoginInput) {
    return this.authService.login(input);
  }
}
