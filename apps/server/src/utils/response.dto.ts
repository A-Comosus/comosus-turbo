import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

/**
 * See reference 👉 https://docs.nestjs.com/graphql/resolvers#generics
 */
export function ResponseSuccess<TData>(classRef: Type<TData>) {
  @ObjectType({ isAbstract: true })
  abstract class ResponseSuccessType {
    @Field()
    result: 'success';

    @Field()
    message: string;

    @Field(() => classRef)
    data: TData;
  }
  return ResponseSuccessType;
}

@ObjectType()
export class ResponseWarning {
  @Field()
  result: 'warning';

  @Field()
  message: string;
}

@ObjectType()
export class ResponseError {
  @Field()
  result: 'error';

  @Field()
  message: string;
}

export function resolveResponse<TSuccess, TWarning, TError>({
  result,
  onSuccessClassRef,
  onWarningClassRef,
  onErrorClassRef,
}: {
  result: 'success' | 'warning' | 'error';
  onSuccessClassRef: Type<TSuccess>;
  onWarningClassRef?: Type<TWarning>;
  onErrorClassRef?: Type<TError>;
}) {
  switch (result) {
    case 'success':
      return onSuccessClassRef ?? ResponseSuccess(null);
    case 'warning':
      return onWarningClassRef ?? ResponseWarning;
    case 'error':
      return onErrorClassRef ?? ResponseError;
  }
}
