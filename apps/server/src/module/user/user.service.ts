import { Injectable, Logger, UseFilters } from '@nestjs/common';
import { PrismaKnownErrorFilter, PrismaService } from '@src/system/prisma';
import { RegisterInput } from '../auth/dto';
import { DeleteUserDTO, DeleteUserInput, FindAllUserSuccess } from './dto';
import type { User } from '@prisma/client';

@Injectable()
@UseFilters(PrismaKnownErrorFilter)
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(private prismaService: PrismaService) {}

  async create(newUser: RegisterInput) {
    this.logger.debug(`Creating new user with email ${newUser.email}...`);
    const user = await this.prismaService.user.create({
      data: {
        ...newUser,
        username: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    this.logger.debug(`New user created with email ${newUser.email}...`);
    return user;
  }

  async update({
    where,
    data,
  }: {
    where: {
      email: string;
    };
    data: Partial<User>;
  }) {
    this.logger.debug(`Updating new user with email ${where.email}`);
    const user = await this.prismaService.user.update({
      where,
      data,
    });

    return user;
  }

  async findAll() {
    this.logger.debug('Listing all users...');
    const users = await this.prismaService.user.findMany();
    return new FindAllUserSuccess('This is list of all users', users);
  }

  async findOneByEmail(email: string) {
    this.logger.debug(`Searching for user with email ${email}...`);
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    this.logger.debug(`Found user with email ${email}...`);
    return user;
  }

  async remove({ id }: DeleteUserInput): Promise<typeof DeleteUserDTO> {
    this.logger.debug(`Deleting user with id ${id}...`);
    const user = await this.prismaService.user.delete({
      where: {
        id: BigInt(id),
      },
    });

    this.logger.debug(`Deleted user with id ${id}...`);
    return {
      result: 'success',
      message: 'User deleted successfully',
      data: user,
    };
  }
}
