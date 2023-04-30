import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { ServerDTO, createResponseUnion } from './dto';

const ServerResponseUnion = createResponseUnion<ServerDTO>({
  name: 'ServerResponse',
});
@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => [ServerResponseUnion])
  hello(): Array<typeof ServerResponseUnion> {
    return this.appService.getHello();
  }
}
