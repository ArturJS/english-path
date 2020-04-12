import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;

  @Field()
  email: string;
}
