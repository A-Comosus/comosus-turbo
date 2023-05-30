import {
  Catch,
  ExceptionFilter,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ResponseError } from '@src/utils';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(UnauthorizedExceptionFilter.name);

  catch(exception: UnauthorizedException) {
    this.logger.error(exception);

    return new ResponseError(
      `User is not authorised to perform this action: ${exception.message}`,
    );
  }
}
