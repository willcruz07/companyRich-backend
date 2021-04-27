import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entity/Company";
import CompanyRepository from "../typeorm/repository/CompanyRepository";

interface IRequest {
  page: string;
}

interface IResponse {
  total: number;
  data: Company[];
}

export default class ListCompanyService {
  public async execute({ page }: IRequest): Promise<IResponse> {
    const companyRepository = getCustomRepository(CompanyRepository);

    const [data, total] = await companyRepository.findAndCount({
      order: {
        name: "ASC",
      },
      skip: (parseInt(page) - 1) * 5,
      take: 5,
    });

    return { data, total };
  }
}
