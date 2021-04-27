import { getRepository } from "typeorm";
import BillingAnnual from "../typeorm/entity/BillingAnnual";

export default class ListBillingAnnualService {
  public async execute(): Promise<BillingAnnual[]> {
    const billingAnnualRepository = getRepository(BillingAnnual);

    const billingAnnual = await billingAnnualRepository.find();

    return billingAnnual;
  }
}
