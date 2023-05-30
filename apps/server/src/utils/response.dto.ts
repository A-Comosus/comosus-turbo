import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

/**
 * See reference 👉 https://docs.nestjs.com/graphql/resolvers#generics
 *
 * WARNING: I don't know how to make this function compatible with classRef in array (e.g. when classRef is [TData]). To get the best typescript support, when you are passing in an array of classes. You will need to convert the class to unknown then cast it to what ever type this funtion is asking. It will work in runtime, so no biggy there...
 *
 * The way I see this, we need an way to find a way to let typescript know, when `classRef` is a type of Type<TData>[], the data field needs to be type of TData[]. But I could be totally wrong here.
 *
 * If you have a better idea on how to fix this, please do let me know :)
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

    constructor(message: string, data: TData) {
      this.result = 'success';
      this.message = message;
      this.data = data;
    }
  }

  return ResponseSuccessType;
}

@ObjectType()
export class ResponseSuccessWithoutData {
  @Field()
  result: 'success';

  @Field()
  message: string;

  constructor(message: string) {
    this.result = 'success';
    this.message = message;
  }
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

  constructor(message: string) {
    this.result = 'error';
    this.message = message;
  }
}

export function resolveResponse<TSuccess, TWarning, TError>({
  result,
  onSuccessClassRef,
  onWarningClassRef,
  onErrorClassRef,
}: {
  result: 'success' | 'warning' | 'error';
  onSuccessClassRef?: Type<TSuccess>;
  onWarningClassRef?: Type<TWarning>;
  onErrorClassRef?: Type<TError>;
}) {
  switch (result) {
    case 'success':
      return onSuccessClassRef ?? ResponseSuccessWithoutData;
    case 'warning':
      return onWarningClassRef ?? ResponseWarning;
    case 'error':
      return onErrorClassRef ?? ResponseError;
  }
}
