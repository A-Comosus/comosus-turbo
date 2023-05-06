import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@src/module/system';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [
    ConfigModule,
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
  ],
})
export class AuthModule {}
