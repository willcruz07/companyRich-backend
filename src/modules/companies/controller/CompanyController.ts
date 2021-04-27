import { Request, Response } from "express";
import CreateCompanyService from "../services/CreateCompanyService";
import DeleteCompanyService from "../services/DeleteCompanyService";
import ListCompanyService from "../services/ListCompanyService";
import ShowCompanyService from "../services/ShowCompanyService";
import UpdateCompanyService from "../services/UpdateCompanyService";

export default class CompanyController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request?.query.page || 1;

    const listCompanies = new ListCompanyService();

    const company = await listCompanies.execute({ page: page.toString() });

    return response.json(company);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const showCompany = new ShowCompanyService();

    const company = await showCompany.execute({ name });

    return response.json(company);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cnpj, demand, idBillingAnnual, bio } = request.body;

    const createCompany = new CreateCompanyService();

    const company = await createCompany.execute({
      name,
      cnpj,
      demand,
      idBillingAnnual,
      bio,
    });

    return response.status(201).json(company);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, cnpj, demand, idBillingAnnual, bio } = request.body;

    const { id } = request.params;

    const updateCompany = new UpdateCompanyService();

    const company = await updateCompany.execute({
      id,
      name,
      cnpj,
      demand,
      idBillingAnnual,
      bio,
    });

    return response.json(company);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCompany = new DeleteCompanyService();

    await deleteCompany.execute({ id });

    return response.json([]);
  }
}
