import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  LoginInput,
  LoginResponseDTO,
  RegisterInput,
  RegisterResponseDTO,
} from './dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => RegisterResponseDTO)
  register(@Args('input') input: RegisterInput) {
    return this.authService.register(input);
  }

  @Mutation(() => LoginResponseDTO)
  login(@Args('input') input: LoginInput) {
    return this.authService.login(input);
  }
}
