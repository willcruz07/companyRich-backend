import AppError from "../../../shared/error/AppError";
import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entity/Company";
import CompanyRepository from "../typeorm/repository/CompanyRepository";

interface IRequest {
  id?: string;
  name: string;
}

export default class ShowCompanyService {
  public async execute({ name }: IRequest): Promise<Company> {
    const companyRepository = getCustomRepository(CompanyRepository);
    const company = await companyRepository.findOne({
      where: {
        name: name,
      },
    });

    if (!company) throw new AppError("Company not found");

    return company;
  }
}
