import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { BigIntResolver } from 'graphql-scalars';
import { User as DBUser } from '@prisma/client';

@ObjectType()
class User implements DBUser {
  @Field(() => BigIntResolver)
  id: bigint;

  @Field()
  email: string;

  @Field({ nullable: true })
  username: string;

  @Field()
  password: string;

  @Field()
  acceptTerms: boolean;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class UserDTO extends OmitType(User, ['password'] as const) {}
