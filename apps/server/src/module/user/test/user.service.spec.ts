import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { mockPrismaService } from '@src/system/prisma';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, mockPrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
