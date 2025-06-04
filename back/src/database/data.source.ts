import { DataSource } from "typeorm";
import { Contact } from "../entities/Contact";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: [Contact],
  logging: true,
  subscribers: [],
  migrations: [],
});
