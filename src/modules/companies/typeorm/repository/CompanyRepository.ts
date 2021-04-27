import { EntityRepository, Repository } from "typeorm";
import Company from "../entity/Company";

@EntityRepository(Company)
export default class CompanyRepository extends Repository<Company> {
  public async findByCnpj(cnpj: number): Promise<Company | undefined> {
    const company = this.findOne({
      where: {
        cnpj,
      },
    });

    return company;
  }
}
