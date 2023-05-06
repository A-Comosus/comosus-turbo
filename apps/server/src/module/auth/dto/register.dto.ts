import { Field, InputType, ObjectType, createUnionType } from '@nestjs/graphql';
import { ResponseError, ResponseSuccess } from '@src/utils';
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

@ObjectType()
class Registered {
  @Field()
  accessToken: string;

  @Field()
  user: string;
}

@ObjectType()
class RegisterSuccess extends ResponseSuccess(Registered) {}

export const RegisterResponseDTO = createUnionType({
  name: 'RegisterResponse',
  types: () => [RegisterSuccess, ResponseError] as const,
  resolveType: ({ result }) => {
    switch (result) {
      case 'success':
        return RegisterSuccess;
      case 'error':
        return ResponseError;
    }
  },
});
