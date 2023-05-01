import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { ResponseError, ResponseSuccess, resolveResponse } from '@src/utils';

@ObjectType()
class App {
  @Field()
  status: string;
}

@ObjectType()
class AppResponseSuccess extends ResponseSuccess(App) {}

export const AppResponseDTO = createUnionType({
  name: 'AppResponse',
  types: () => [AppResponseSuccess, ResponseError] as const,
  resolveType: ({ result }) =>
    resolveResponse({ result, onSuccessClassRef: AppResponseSuccess }),
});
