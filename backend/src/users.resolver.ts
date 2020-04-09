import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.dto';

@Resolver()
export class UsersResolver {
  constructor(
    // private usersService: UsersService,
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
}
