import { Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ResponseError } from '../../../utils';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaKnownErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaKnownErrorFilter.name);

  catch(exception: Prisma.PrismaClientKnownRequestError): ResponseError {
    let message;
    const { code, meta } = exception;

    switch (code) {
      // Unique constraint failed on the {constraint}
      case 'P2002':
        const key = (meta?.target as string[]).join(' ');
        message = `${key} already in use`;

      // An operation failed because it depends on one or more records that were required but not found. {cause}
      case 'P2025':
        message = meta.cause as string;

      default:
        message = 'Unhandled Prisma Known Request Error';
    }

    return { result: 'error', message: `[${code}] ${message}` };
  }
}
