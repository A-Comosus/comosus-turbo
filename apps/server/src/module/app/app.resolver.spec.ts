import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AppResponseSuccess } from './dto';

describe('AppResolver', () => {
  let appResolver: AppResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppResolver],
      providers: [AppService],
    }).compile();

    appResolver = app.get<AppResolver>(AppResolver);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const result = await appResolver.getAppStatus();

      console.log(result);

      expect(result).toStrictEqual(
        new AppResponseSuccess('Request successful', { status: 'up' }),
      );
    });
  });
});
