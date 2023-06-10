import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get port(): number {
    return this.configService.get('PORT');
  }

  get isSlsOffline(): boolean {
    return this.configService.get('IS_OFFLINE') === 'true';
  }

  get jwtSecret(): string {
    return this.configService.get('JWT_SECRET');
  }

  get senderEmailAddress(): string {
    return this.configService.get('SENDER_EMAIL_ADDRESS');
  }

  get oneTimeTokenSecret(): string {
    return this.configService.get('ONE_TIME_TOKEN_SECRET');
  }

  get clientBaseUrl(): string {
    return this.configService.get('CLIENT_BASE_URL');
  }
}
