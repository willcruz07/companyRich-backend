import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1619138356617 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cnpj",
            type: "bigint",
          },
          {
            name: "demand",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "id_billing_annual",
            type: "varchar",
          },
          {
            name: "bio",
            type: "text",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("companies");
  }
}
