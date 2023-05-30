import { Field, InputType, ObjectType, createUnionType } from '@nestjs/graphql';
import { UserDTO } from '@src/module/user';
import { ResponseError, ResponseSuccess, resolveResponse } from '@src/utils';
import { IsBoolean, IsEmail, IsNotEmpty, Matches } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).+$/)
  password: string;

  @Field()
  @IsBoolean()
  acceptTerms: boolean;
}

@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;
}

@ObjectType()
class Authenticated {
  @Field()
  accessToken: string;

  @Field(() => UserDTO)
  user: UserDTO;
}

@ObjectType()
export class RegisterSuccess extends ResponseSuccess(Authenticated) {}

export const RegisterResponseDTO = createUnionType({
  name: 'RegisterResponse',
  types: () => [RegisterSuccess, ResponseError] as const,
  resolveType: ({ result }) =>
    resolveResponse({
      result,
      onSuccessClassRef: RegisterSuccess,
      onErrorClassRef: ResponseError,
    }),
});

@ObjectType()
export class LoginSuccess extends ResponseSuccess(Authenticated) {}

export const LoginResponseDTO = createUnionType({
  name: 'LoginResponse',
  types: () => [LoginSuccess, ResponseError] as const,
  resolveType: ({ result }) =>
    resolveResponse({
      result,
      onSuccessClassRef: LoginSuccess,
      onErrorClassRef: ResponseError,
    }),
});
