import { Module } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ConfigModule } from '../config';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [ExternalService],
  imports: [ConfigModule, HttpModule],
  exports: [ExternalService],
})
export class ExternalModule {}
