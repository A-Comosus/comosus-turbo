import { ObjectType, Field, InputType, createUnionType } from '@nestjs/graphql';
import { ResponseError, ResponseSuccess, resolveResponse } from '@src/utils';
import { UserDTO } from './user.entity';
import { Type } from '@nestjs/common';

@ObjectType()
export class FindAllUserSuccess extends ResponseSuccess([
  UserDTO,
] as unknown as Type<UserDTO[]>) {}

export const FindAllUserDTO = createUnionType({
  name: 'FindAllUserDTO',
  types: () => [FindAllUserSuccess, ResponseError] as const,
  resolveType: ({ result }) =>
    resolveResponse({
      result,
      onSuccessClassRef: FindAllUserSuccess,
    }),
});

@InputType()
export class DeleteUserInput {
  @Field()
  id: string;
}

@ObjectType()
export class DeleteSuccess extends ResponseSuccess(UserDTO) {}

export const DeleteUserDTO = createUnionType({
  name: 'DeleteUserDTO',
  types: () => [DeleteSuccess, ResponseError] as const,
  resolveType: ({ result }) =>
    resolveResponse({
      result,
      onSuccessClassRef: DeleteSuccess,
    }),
});
