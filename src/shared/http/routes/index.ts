import { Router } from "express";
import sessionsRouter from "../../../modules/users/routes/Sessions.routes";
import userRouter from "../../../modules/users/routes/User.routes";
import companyRouter from "../../../modules/companies/routes/Company.routes";
import billingAnnualRouter from "../../../modules/companies/routes/BillingAnnual.routes";

const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/company", companyRouter);
routes.use("/billing-annual", billingAnnualRouter);
routes.use("/user", userRouter);

export default routes;
