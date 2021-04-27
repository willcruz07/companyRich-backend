import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBillingAnnual1619179061480 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "billing_annual",
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
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      }),
    );

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("billing_annual")
      .values([
        { id: () => "uuid_generate_v4()", name: "Até R$ 10 milhões" },
        { id: () => "uuid_generate_v4()", name: "De R$ 10 a R$ 50 milhões" },
        { id: () => "uuid_generate_v4()", name: "De R$ 50 a R$ 200 milhões" },
        { id: () => "uuid_generate_v4()", name: "De R$ 200 a R$ 500 milhões" },
        { id: () => "uuid_generate_v4()", name: "Acima de R$ 500 milhões" },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("billing_annual");
  }
}
