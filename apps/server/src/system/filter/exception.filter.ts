import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ResponseError } from '@src/utils';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const error: ResponseError = {
      result: 'error',
      message: exception.message,
    };

    return error;
  }
}
