import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '../../system/config';
import { UserModule } from '../../module/user';
import { ExternalModule } from '../../system/external';

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
    ConfigModule,
    ExternalModule,
  ],
})
export class AuthModule {}
