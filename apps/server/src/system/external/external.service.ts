import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '../config';
import { catchError, firstValueFrom } from 'rxjs';
import type { AxiosError } from 'axios';

@Injectable()
export class ExternalService {
  private readonly logger = new Logger(ExternalService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendPlainEmail({
    from,
    to,
    subject,
    body,
  }: {
    from: string;
    to: string;
    subject: string;
    body: string;
  }) {
    const {
      status,
      data: { message },
    } = await firstValueFrom(
      this.httpService
        .post<{ message: string }>(
          'https://6aufo80af9.execute-api.ap-southeast-2.amazonaws.com/send-email',
          {
            to,
            subject,
            text: 'If you see this, then let me know where did you saw this.',
            html: body,
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.message);

            throw new Error(
              'Failed to complete request to mailing microservice.',
            );
          }),
        ),
    );

    this.logger.debug(
      `Mailing service responed with status code ${status}, ${message}`,
    );
  }
}
