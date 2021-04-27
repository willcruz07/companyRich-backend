import { Request, Response } from "express";
import ListUserService from "../services/ListUserService";

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const user = await listUser.execute();

    return response.json(user);
  }
}
