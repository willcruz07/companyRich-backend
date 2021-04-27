import { Router } from "express";
import CompanyController from "../controller/CompanyController";
import isAuthenticated from "../../../shared/http/middleware/isAuthenticated";

const companyRouter = Router();

const companyController = new CompanyController();

companyRouter.get("/", isAuthenticated, companyController.index);

companyRouter.get("/:name", isAuthenticated, companyController.show);

companyRouter.post("/", isAuthenticated, companyController.create);

companyRouter.put("/:id", isAuthenticated, companyController.update);

companyRouter.delete("/:id", isAuthenticated, companyController.delete);

export default companyRouter;
