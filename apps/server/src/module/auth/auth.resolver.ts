import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  LoginInput,
  LoginResponseDTO,
  StartVerificationInput,
  RegisterInput,
  RegisterResponseDTO,
  StartVerificationResponseDTO,
  VerificationResponseDTO,
  VerifyUserInput,
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

  @Mutation(() => StartVerificationResponseDTO)
  restartVerification(@Args('input') input: StartVerificationInput) {
    return this.authService.startVerification(input);
  }

  @Mutation(() => VerificationResponseDTO)
  verifyUser(@Args('input') input: VerifyUserInput) {
    return this.authService.verifyUser(input);
  }
}
