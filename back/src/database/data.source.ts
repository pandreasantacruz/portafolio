import { DataSource } from "typeorm";
import { HOST, PORT_PG } from "../config/envs";
import { Contact } from "../entities/Contact";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: Number(PORT_PG),
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: [Contact],
  logging: true,
  subscribers: [],
  migrations: [],
});
