import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Context } from 'aws-lambda';
import { createServer, proxy, Response } from 'aws-serverless-express';
import express, { Express } from 'express';
import { Server } from 'http';
import { AppModule } from '@src/module/app';
import { ConfigService } from '@src/system/config';
import { LoggerService } from '@src/system/logger';
import { PrismaKnownErrorFilter, PrismaService } from '@src/system/prisma';
import {
  GlobalExceptionFilter,
  UnauthorizedExceptionFilter,
} from '@src/system/filter';
import 'json-bigint-patch';

let cachedServer: Server;

const logger = new Logger('A-ComosusServer');

async function createExpressApp(expressApp: Express) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
    {
      cors: {
        origin: ['http://localhost:3000'],
      },
    },
  );

  app.useLogger(app.get(LoggerService));

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalFilters(new PrismaKnownErrorFilter());
  app.useGlobalFilters(new UnauthorizedExceptionFilter());

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHook(app);

  return app;
}

async function bootstrap(): Promise<Server> {
  const expressApp = express();
  const app = await createExpressApp(expressApp);

  const { isSlsOffline, port } = app.get(ConfigService);

  if (isSlsOffline) {
    await app.init();
    logger.log(`Server is initialized in serverless-offline`);
  } else {
    await app.listen(port);
    logger.log(`Server started on port ${port}`);
  }

  return createServer(expressApp);
}

// Start the server in dev mode
process.env.IS_OFFLINE === 'false' && bootstrap();

// Start the server in serverless-offline mode
export async function handler(event: any, context: Context): Promise<Response> {
  if (!cachedServer) {
    const server = await bootstrap();
    cachedServer = server;
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
}
