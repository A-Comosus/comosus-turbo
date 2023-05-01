import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AppResponseDTO } from './dto';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => AppResponseDTO)
  getAppStatus() {
    return this.appService.getAppStatus();
  }
}
