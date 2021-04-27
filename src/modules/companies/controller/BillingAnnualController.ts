import { Request, Response } from "express";
import ListBillingAnnualService from "../services/ListBillingAnnualService";

export default class BillingAnnualController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBillingAnnual = new ListBillingAnnualService();

    const billingAnnual = await listBillingAnnual.execute();

    return response.json(billingAnnual);
  }
}
