import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@src/system/config';
import { UserModule } from '@src/module/user';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.jwtSecret,
        signOptions: {
          expiresIn: 60 * 60,
        },
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
})
export class AuthModule {}
