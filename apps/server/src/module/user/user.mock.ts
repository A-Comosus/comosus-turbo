import { UserService } from './user.service';

export const mockUserService = { provide: UserService, useValue: {} };
