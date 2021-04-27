import { getCustomRepository } from "typeorm";
import User from "../typeorm/entity/User";
import UserRepository from "../typeorm/repository/UserRepository";

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const userRespository = getCustomRepository(UserRepository);

    const user = await userRespository.find();

    return user;
  }
}
