import AppError from "../../../shared/error/AppError";
import { getCustomRepository } from "typeorm";
import CompanyRepository from "../typeorm/repository/CompanyRepository";

interface IRequest {
  id: string;
}

export default class DeleteCompanyService {
  public async execute({ id }: IRequest): Promise<void> {
    const companyRepository = getCustomRepository(CompanyRepository);

    const company = await companyRepository.findOne(id);

    if (!company) throw new AppError("Company not found");

    await companyRepository.remove(company);
  }
}
