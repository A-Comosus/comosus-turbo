import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log(`Database connection established.`);
    } catch (error) {
      this.logger.error(error);
    }
  }

  async enableShutdownHook(app: INestApplication) {
    this.$on('beforeExit', () => {
      this.logger.log('Shutting down database connection...');
      app.close();
    });
  }
}
