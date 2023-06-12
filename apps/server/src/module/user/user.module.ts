import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '../../system/prisma';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../../system/config';

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule, JwtModule, ConfigModule],
  exports: [UserService],
})
export class UserModule {}
