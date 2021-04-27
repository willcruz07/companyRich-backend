import AppError from "../../../shared/error/AppError";
import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entity/Company";
import CompanyRepository from "../typeorm/repository/CompanyRepository";

interface IRequest {
  name: string;
  cnpj: number;
  demand: number;
  idBillingAnnual: string;
  bio?: string;
}

export default class CreateCompanyService {
  public async execute({
    name,
    cnpj,
    demand,
    idBillingAnnual,
    bio,
  }: IRequest): Promise<Company> {
    const companyRepository = getCustomRepository(CompanyRepository);

    const companyExists = await companyRepository.findByCnpj(cnpj);

    if (companyExists) throw new AppError("This company already exists.");

    const company = companyRepository.create({
      name,
      cnpj,
      demand,
      id_billing_annual: idBillingAnnual,
      bio,
    });

    await companyRepository.save(company);

    return company;
  }
}
