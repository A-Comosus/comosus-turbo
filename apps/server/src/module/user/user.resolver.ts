import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { DeleteUserDTO, DeleteUserInput, FindAllUserDTO, UserDTO } from './dto';
import { Logger, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../system/guard';

@Resolver(() => UserDTO)
@UseGuards(JwtGuard)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);
  constructor(private readonly userService: UserService) {}

  @Query(() => FindAllUserDTO, { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Mutation(() => DeleteUserDTO)
  deleteUser(@Args('input') input: DeleteUserInput) {
    return this.userService.remove(input);
  }
}
