import { Injectable } from '@nestjs/common';
import { AppResponseDTO, AppResponseSuccess } from './dto';
import { ResponseError } from '../../utils';

@Injectable()
export class AppService {
  getAppStatus(): typeof AppResponseDTO {
    try {
      return new AppResponseSuccess('Request successful', {
        status: 'up',
      });
    } catch (error) {
      return new ResponseError(error.message);
    }
  }
}
