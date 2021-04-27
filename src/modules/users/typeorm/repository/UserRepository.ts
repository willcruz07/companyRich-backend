import { EntityRepository, Repository } from "typeorm";
import User from "../entity/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}
