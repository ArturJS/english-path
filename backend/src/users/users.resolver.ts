import { Query, Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Field, ObjectType, InputType, Int } from 'type-graphql';
import { Request, Response } from 'express';
import { GqlAuthGuard } from '../common/guards/gql-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from './user.dto';
import { UsersService } from './users.service';

export interface ResolverContext {
  req: Request;
  res: Response;
}


@ObjectType()
export class LoginResponse {
  @Field({ nullable: true })
  message: string;

  @Field({ nullable: true })
  user: User;

  constructor({message, user}: {message?: string, user?: User}) {
    this.message = message;
    this.user = user;
  }
}


@InputType({ description: 'Login Input' })
export class LoginInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}

@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query((returns) => [User])
  async users(): Promise<Array<Object>> {
    return [
        {
            id: 1,
            email: 'user1@mail.com'
        },
        {
            id: 2,
            email: 'user2@mail.com'
        }
    ];
  }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.usersService.findById(user.id);
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() ctx: ResolverContext,
  ): Promise<LoginResponse> {
    const user = await this.usersService.findOne({email: loginInput.email});

    if (!user) {
      return new LoginResponse({
        message: "Wrong email or password"
      });
    }
  
    ctx.req.login(user, () => {});
  
    return new LoginResponse({
      user
    });
  }

  @Mutation(() => Int)
  async logout(
    @Context() ctx: ResolverContext,
  ): Promise<number> {  
    ctx.req.logout();
    return 0;
  }
}


// Examples:

// mutation {
//   login(loginInput: { email: "user1@mail.com", password: "123" }) {
//     message
//     user {
//       email
//     }
//   }
// }
