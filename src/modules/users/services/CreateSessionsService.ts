import { encode } from "js-base64";
import { sign } from "jsonwebtoken";
import AppError from "../../../shared/error/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entity/User";
import UserRepository from "../typeorm/repository/UserRepository";
import AuthConfig from "../../../config/auth";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) throw new AppError("User not found.", 401);

    const confirmedPassword = user.password === encode(password);

    if (!confirmedPassword) throw new AppError("Invalid password", 401);

    const token = sign({}, AuthConfig.jwt.secret, {
      subject: user.id,
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}
