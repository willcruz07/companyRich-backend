import { Router } from "express";
import UserController from "../controller/UserController";
import isAuthenticated from "../../../shared/http/middleware/isAuthenticated";

const userRouter = Router();

const userController = new UserController();

userRouter.get("/", isAuthenticated, userController.index);

export default userRouter;
