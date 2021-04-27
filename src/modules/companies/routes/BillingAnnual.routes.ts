import { Router } from "express";
import isAuthenticated from "../../../shared/http/middleware/isAuthenticated";
import BillingAnnualController from "../controller/BillingAnnualController";

const billingAnnualRouter = Router();

const billingAnnualController = new BillingAnnualController();

billingAnnualRouter.get("/", billingAnnualController.index);

export default billingAnnualRouter;
