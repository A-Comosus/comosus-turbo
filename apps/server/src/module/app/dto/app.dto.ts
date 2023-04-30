import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ServerDTO {
  @Field()
  message: string;
}
