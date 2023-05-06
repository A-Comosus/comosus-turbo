import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput, RegisterResponseDTO } from './dto';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@src/pipe';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => RegisterResponseDTO)
  @UsePipes(new ValidationPipe())
  register(@Args('input') input: RegisterInput) {
    return this.authService.regiser(input);
  }
}
