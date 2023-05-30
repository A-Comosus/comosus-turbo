import { Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { ResponseError } from '@src/utils';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: Error) {
    this.logger.error(exception);

    return new ResponseError(
      `Caught global http exception: ${exception.message}`,
    );
  }
}
