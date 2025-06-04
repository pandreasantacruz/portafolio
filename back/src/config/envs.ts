import "dotenv/config";
export const PORT = process.env.PORT || 3001;
export const DATABASEURL = process.env.DATABASE_URL;
console.log("ENV DEBUG:", {
  DATABASEURL,
});
