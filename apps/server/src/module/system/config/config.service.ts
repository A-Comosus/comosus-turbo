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
}
