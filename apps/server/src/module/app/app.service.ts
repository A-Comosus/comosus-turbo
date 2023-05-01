import { Injectable } from '@nestjs/common';
import { AppResponseDTO } from './dto';

@Injectable()
export class AppService {
  getAppStatus(): typeof AppResponseDTO {
    try {
      return {
        result: 'success',
        message: 'Request successful',
        data: {
          status: 'up',
        },
      };
    } catch (error) {
      return {
        result: 'error',
        message: error.message,
      };
    }
  }
}
