import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  descriptions?: string;

  @Field()
  createDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}
