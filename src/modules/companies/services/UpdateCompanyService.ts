import AppError from "../../../shared/error/AppError";
import { getCustomRepository, Not } from "typeorm";
import Company from "../typeorm/entity/Company";
import CompanyRepository from "../typeorm/repository/CompanyRepository";

interface IRequest {
  id: string;
  name: string;
  cnpj: number;
  demand: number;
  idBillingAnnual: string;
  bio?: string;
}

export default class UpdateCompanyService {
  public async execute({
    id,
    name,
    cnpj,
    demand,
    idBillingAnnual,
    bio,
  }: IRequest): Promise<Company> {
    const companyRepository = getCustomRepository(CompanyRepository);

    const company = await companyRepository.findOne(id);

    if (!company) throw new AppError("Company not found");

    const companyExists = await companyRepository.findOne({
      where: { id: Not(id), cnpj: cnpj },
    });

    if (companyExists) throw new AppError("Company already exists");

    company.name = name;
    company.cnpj = cnpj;
    company.demand = demand;
    if (bio) company.bio = bio;
    company.id_billing_annual = idBillingAnnual;

    await companyRepository.save(company);

    return company;
  }
}
