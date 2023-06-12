import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from '../user.resolver';
import { UserService } from '../user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '../../../system/config';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        { provide: UserService, useValue: {} },
        { provide: JwtService, useValue: {} },
        { provide: ConfigService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
