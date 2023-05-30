import { PrismaService } from './prisma.service';

export const mockPrismaService = { provide: PrismaService, useValue: {} };
