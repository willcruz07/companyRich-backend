import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("billing_annual")
export default class BillingAnnual {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
