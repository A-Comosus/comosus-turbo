import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { BigIntResolver } from 'graphql-scalars';

@ObjectType()
class User {
  @Field(() => BigIntResolver)
  id: bigint;

  @Field()
  email: string;

  @Field({ nullable: true })
  username: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class UserDTO extends OmitType(User, ['password'] as const) {}
