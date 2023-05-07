import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  /**
   * responsible for bypassing the validation step when the current argument being processed is a native JavaScript type (these can't have validation decorators attached, so there's no reason to run them through the validation step).
   */
  private isNativeType({ metatype }: { metatype: Type }) {
    const validTypes: Type[] = [String, Boolean, Number, Array, Object];
    return validTypes.includes(metatype);
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (metatype || this.isNativeType({ metatype })) return value;

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Request does not satisfy validation');
    }

    return value;
  }
}
