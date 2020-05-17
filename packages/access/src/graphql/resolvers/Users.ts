import { Resolver, Query } from 'type-graphql';
import { User } from '../types';

@Resolver(() => User)
export default class UserResolver {
  @Query()
  async user(): Promise<User> {
    const user = new User();
    user.displayName = 'John Doe';
    user.email = 'john.doe@company.co.uk';
    user.id = 1;

    return user;
  }
}
