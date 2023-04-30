import { Field, ObjectType, createUnionType } from '@nestjs/graphql';

@ObjectType()
export class ResponseDTO<TData> {
  @Field()
  status: 'success';

  @Field()
  message: string;

  @Field()
  data: TData;
}

@ObjectType()
export class ResponseWarning {
  @Field()
  status: 'warning';

  @Field()
  message: string;
}

@ObjectType()
export class ResponseError {
  @Field()
  status: 'error';

  @Field()
  message: string;
}

export function createResponseUnion<TData>({ name }: { name: string }) {
  return createUnionType({
    name,
    types: () => [ResponseDTO<TData>, ResponseError] as const,
    resolveType({ status }) {
      if (status === 'success') {
        return ResponseDTO<TData>;
      }
      if (status === 'error') {
        return ResponseError;
      }
      return null;
    },
  });
}
