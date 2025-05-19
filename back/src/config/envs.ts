import "dotenv/config";
export const PORT = process.env.PORT || 3001;

export const HOST = process.env.DB_HOST;
export const PORT_PG = process.env.DB_PORT;
export const USERNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.DB_PASSWORD;
export const DATABASE = process.env.DB_NAME;
console.log("ENV DEBUG:", {
  HOST,
  PORT_PG,
  USERNAME,
  PASSWORD: typeof PASSWORD,
  DATABASE,
});
