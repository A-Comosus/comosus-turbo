import { InternalServerErrorException, Logger } from '@nestjs/common';
import { z } from 'zod';

export function validate(config: Record<string, unknown>) {
  const logger = new Logger('ConfigValidator');

  try {
    const schema = z.object({
      PORT: z
        .string()
        .transform((val) => {
          const parsed = parseInt(val);
          if (isNaN(parsed))
            logger.error(
              `Invalid environment variable PORT defined, found ${val}, default to 3100`,
            );

          return parsed;
        })
        .default('3100'),
      IS_OFFLINE: z.string().default('false'),
      DATABASE_URL: z.string(),
      JWT_SECRET: z.string(),
      SENDER_EMAIL_ADDRESS: z.string(),
      ONE_TIME_TOKEN_SECRET: z.string(),
      CLIENT_BASE_URL: z.string(),
    });

    return schema.parse(config);
  } catch (e) {
    if (e instanceof z.ZodError) {
      const message = 'Environment variables are not set correctly';
      logger.error(message);
      logger.error(JSON.stringify(e.errors));
      throw new InternalServerErrorException(message);
    }
    throw new InternalServerErrorException(e);
  }
}
